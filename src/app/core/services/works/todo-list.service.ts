import { Injectable } from '@angular/core';

import { forkJoin, map, Observable, Subject, tap } from 'rxjs';

import { ApiService } from '../api.service';
import { TodoList } from '../../models/todo-list.model';
import { TodoTask } from '../../models/todo-task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todoLists: TodoList[];
  private listsUpdated = new Subject<TodoList[]>();
  private editedItemUpdated = new Subject<{
    data: TodoList | TodoTask;
    cardType: string;
  }>();

  constructor(private apiService: ApiService) {}

  public getListUpdatedListener$() {
    return this.listsUpdated.asObservable();
  }

  public getEditedItemUpdatedListener$() {
    return this.editedItemUpdated.asObservable();
  }

  public addList(listName: string): void {
    this.apiService
      .post$<{ list: TodoList }>('todo/list', { listName })
      .pipe(
        tap((listDTO) => {
          const list = TodoList.fromDTO(listDTO.list);
          this.todoLists.push(list);
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }

  public getLists(): void {
    forkJoin([
      this.apiService.get$<{ lists: TodoList[] }>('todo/list'),
      this.apiService.get$<{ tasks: TodoTask[] }>('todo/task')
    ])
      .pipe(
        map(([listsDTO, tasksDTO]) => {
          const lists: TodoList[] = listsDTO.lists.map((rawList: any) => {
            return TodoList.fromDTO(rawList);
          });
          const tasks: TodoTask[] = tasksDTO.tasks.map((rawTask) => {
            return TodoTask.fromDTO(rawTask);
          });
          return { tasks, lists };
        }),
        tap(({ tasks, lists }) => {
          const listsWithTasks: TodoList[] = lists.map((list) => {
            list.tasks = tasks.filter((task) => task.listId === list.id);
            return list;
          });
          this.todoLists = listsWithTasks;
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }

  public updateList(updatedList: TodoList): void {
    console.log(updatedList);
    this.apiService
      .put$('todo/list', updatedList.id, updatedList)
      .pipe(
        tap(() => {
          const oldListIndex = this.todoLists.findIndex(
            (list) => list.id === updatedList.id
          );
          this.todoLists[oldListIndex] = updatedList;
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }

  public deleteList(listId: string): void {
    this.apiService
      .delete$<{ message: string }>('todo/list', listId)
      .pipe(
        tap(() => {
          const listIndex = this.todoLists.findIndex(
            (list: TodoList) => list.id === listId
          );
          this.todoLists[listIndex].tasks.map((task) => {
            this.deleteTask(task.id, task.listId);
          });
          this.todoLists.splice(listIndex, 1);
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }

  public addTask(taskName: string, listId: string, checked: boolean): void {
    const task = {
      taskName,
      listId,
      checked
    };
    this.apiService
      .post$<{ task: TodoTask }>('todo/task', task)
      .pipe(
        tap((taskDTO) => {
          const task = TodoTask.fromDTO(taskDTO.task);
          const listIndex = this.todoLists.findIndex(
            (list) => list.id === task.listId
          );
          this.todoLists[listIndex].tasks.push(task);
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }

  public updateTask(updatedTask: TodoTask): void {
    this.apiService
      .put$('todo/task', updatedTask.id, updatedTask)
      .pipe(
        tap(() => {
          const listIndex = this.todoLists.findIndex(
            (list) => list.id === updatedTask.listId
          );
          const oldTaskIndex = this.todoLists[listIndex].tasks.findIndex(
            (task) => task.id === updatedTask.id
          );
          this.todoLists[listIndex].tasks[oldTaskIndex] = updatedTask;
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }

  public deleteTask(taskId: string, listId: string): void {
    this.apiService
      .delete$<{ message: string }>('todo/task', taskId)
      .pipe(
        tap(() => {
          const listIndex = this.todoLists.findIndex(
            (list: TodoList) => list.id === listId
          );
          const taskIndex = this.todoLists[listIndex].tasks.findIndex(
            (task) => task.id === taskId
          );
          this.todoLists[listIndex].tasks.splice(taskIndex, 1);
          this.listsUpdated.next([...this.todoLists]);
        })
      )
      .subscribe();
  }
}
