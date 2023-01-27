export interface TodoList {
  id: string;
  title: string;
  tasks: Array<Task>;
}

export interface Task {
  id: string;
  listId: string;
  checked: boolean;
  title: string;
}
