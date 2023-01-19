import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Task, TodoList } from '../../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todoLists: TodoList[] = [];
  public selectedList: TodoList;

  public todoListsChanges$ = new Subject<TodoList[]>();
  public selectedListChanges$ = new Subject<TodoList>();

  public addList(list: TodoList): void {
    this.todoLists.push(list);
    this.todoListsChanges$.next(this.todoLists);
  }

  public selectList(list: TodoList): void {
    this.selectedList = list;
    this.selectedListChanges$.next(this.selectedList);
  }

  public getSelectedList(): TodoList {
    return this.selectedList;
  }

  public getLists(): TodoList[] {
    return this.todoLists;
  }

  public deleteList(listId: string): void {
    const listIndex = this.todoLists.findIndex(
      (list: TodoList) => list.id === listId
    );
    this.todoLists.splice(listIndex, 1);
    this.todoListsChanges$.next(this.todoLists);
  }

  public addTask(task: Task): void {
    this.selectedList.tasks.push(task);
  }

  public deleteTask(taskId: string): void {
    const taskIndex = this.selectedList.tasks.findIndex(
      (task: Task) => task.id === taskId
    );
    this.selectedList.tasks.splice(taskIndex, 1);
  }
}
