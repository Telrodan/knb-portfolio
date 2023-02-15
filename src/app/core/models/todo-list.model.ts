import { TodoTask } from 'd:/Kodolas/knb-portfolio/src/app/core/models/todo-task.model';

export class TodoList {
  public id: string;
  public listName: string;
  public tasks: TodoTask[];

  constructor(id: string, listName: string, tasks: TodoTask[] = []) {
    this.id = id;
    this.listName = listName;
    this.tasks = tasks;
  }

  public static fromDTO(list: any): TodoList {
    return new TodoList(list._id, list.listName, list.tasks);
  }
}
