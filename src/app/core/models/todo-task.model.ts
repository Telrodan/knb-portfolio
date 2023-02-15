export class TodoTask {
  public id: string;
  public listId: string;
  public taskName: string;
  public checked: boolean;

  constructor(id: string, listId: string, taskName: string, checked: boolean) {
    this.id = id;
    this.listId = listId;
    this.taskName = taskName;
    this.checked = checked;
  }

  public static fromDTO(task: any): TodoTask {
    return new TodoTask(task._id, task.listId, task.taskName, task.checked);
  }
}
