export interface TodoList {
  id: string;
  name: string;
  tasks: Array<Task>;
}

export interface Task {
  id: string;
  listId: string;
  checked: boolean;
  name: string;
}
