import { Injectable } from '@angular/core';

import { forkJoin, map, Subject } from 'rxjs';

import { ApiService } from '../api.service';
import { Task, TodoList } from '../../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todoLists: TodoList[];
  private listsUpdated = new Subject<TodoList[]>();
  private editedItemUpdated = new Subject<{
    data: TodoList | Task;
    cardType: string;
  }>();
  private apiListEndpoint = 'todo-list/list';
  private apiTaskEndpoint = 'todo-list/task';

  constructor(private apiService: ApiService) {}

  public getListUpdatedListener$() {
    return this.listsUpdated.asObservable();
  }

  public getEditedItemUpdatedListener$() {
    return this.editedItemUpdated.asObservable();
  }

  public addList(title: string): void {
    const listData = {
      title
    };
    this.apiService
      .post$<{ message: string; list: TodoList }>(
        this.apiListEndpoint,
        listData
      )
      .subscribe((responseData) => {
        const newList: TodoList = {
          id: responseData.list.id,
          title: responseData.list.title,
          tasks: []
        };
        this.todoLists.push(newList);
        this.listsUpdated.next([...this.todoLists]);
      });
  }

  public addTask(title: string, listId: string, checked: boolean): void {
    const taskData = {
      title,
      listId,
      checked
    };
    this.apiService
      .post$<{ message: string; task: Task }>(this.apiTaskEndpoint, taskData)
      .subscribe((responseData) => {
        const newTask: Task = {
          id: responseData.task.id,
          title: responseData.task.title,
          listId: responseData.task.listId,
          checked: false
        };
        const listIndex = this.todoLists.findIndex(
          (list) => list.id === newTask.listId
        );
        this.todoLists[listIndex].tasks.push(newTask);
        this.listsUpdated.next([...this.todoLists]);
      });
  }

  public getLists(): void {
    forkJoin([
      this.apiService.get$<{ message: string; lists: TodoList[] }>(
        this.apiListEndpoint
      ),
      this.apiService.get$<{ message: string; tasks: Task[] }>(
        this.apiTaskEndpoint
      )
    ])
      .pipe(
        map(([listsDTO, tasksDTO]) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return listsDTO.lists.map((list: any) => {
            const tasks = tasksDTO.tasks
              .filter((task) => task.listId === list._id)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((task: any) => {
                return {
                  id: task._id,
                  title: task.title,
                  listId: task.listId,
                  checked: task.checked
                };
              });
            return {
              id: list._id,
              title: list.title,
              tasks
            };
          });
        })
      )
      .subscribe((transformedLists) => {
        this.todoLists = transformedLists;
        this.listsUpdated.next([...this.todoLists]);
      });
  }

  public updateList(updatedList: TodoList): void {
    this.apiService
      .put$(this.apiListEndpoint, updatedList.id, updatedList)
      .subscribe(() => {
        const updatedLists = [...this.todoLists];
        const oldListIndex = updatedLists.findIndex(
          (list) => list.id === updatedList.id
        );
        updatedLists[oldListIndex] = updatedList;
        this.todoLists = updatedLists;
        this.listsUpdated.next([...this.todoLists]);
      });
  }

  public updateTask(updatedTask: Task): void {
    this.apiService
      .put$(this.apiTaskEndpoint, updatedTask.id, updatedTask)
      .subscribe(() => {
        const updatedLists = [...this.todoLists];
        const listIndex = updatedLists.findIndex(
          (list) => list.id === updatedTask.listId
        );
        const oldTaskIndex = updatedLists[listIndex].tasks.findIndex(
          (task) => task.id === updatedTask.id
        );
        updatedLists[listIndex].tasks[oldTaskIndex] = updatedTask;
        this.todoLists = updatedLists;
        this.listsUpdated.next([...this.todoLists]);
      });
  }

  public deleteList(listId: string): void {
    this.apiService
      .delete$<{ message: string }>(this.apiListEndpoint, listId)
      .subscribe(() => {
        const listIndex = this.todoLists.findIndex(
          (list: TodoList) => list.id === listId
        );
        this.todoLists.splice(listIndex, 1);
        this.listsUpdated.next([...this.todoLists]);
      });
  }

  public deleteTask(taskId: string, listId: string): void {
    this.apiService
      .delete$<{ message: string }>(this.apiTaskEndpoint, taskId)
      .subscribe(() => {
        const listIndex = this.todoLists.findIndex(
          (list: TodoList) => list.id === listId
        );
        const taskIndex = this.todoLists[listIndex].tasks.findIndex(
          (task) => task.id === taskId
        );
        this.todoLists[listIndex].tasks.splice(taskIndex, 1);
        this.listsUpdated.next([...this.todoLists]);
      });
  }
}
