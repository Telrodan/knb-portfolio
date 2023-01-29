import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';

import { Subject } from 'rxjs';
import {
  faTrash,
  faCheck,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';

import { Task, TodoList } from 'src/app/core/models/todo-list.model';
import { ConfirmationModalService } from 'src/app/core/services/confirmation-modal.service';
import { TodoListService } from 'src/app/core/services/works/todo-list.service';

@Component({
  selector: 'knb-portfolio-todo-list-card',
  templateUrl: './todo-list-card.component.html',
  styleUrls: ['./todo-list-card.component.scss']
})
export class TodoListCardComponent implements OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() public cardData: any;
  @Input() public cardType: 'task' | 'list';
  @Input() public selectedList: TodoList;
  @Output() public editItem = new EventEmitter();
  @Output() public selectedListDelete = new EventEmitter();
  public faTrash = faTrash;
  public faCheck = faCheck;
  public faPenToSquare = faPenToSquare;
  private destroy = new Subject();

  constructor(
    private todoListService: TodoListService,
    private confirmationModalService: ConfirmationModalService
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async onDeleteItem(data: any): Promise<void> {
    if (this.cardType === 'list') {
      const confirmed = await this.confirmationModalService.confirmAction(
        'Delete List',
        `Are you sure you want to delete ${data.title}? `
      );
      if (confirmed) {
        this.todoListService.deleteList(data.id);
        this.selectedListDelete.emit();
      }
    } else {
      const confirmed = await this.confirmationModalService.confirmAction(
        'Delete Task',
        `Are you sure you want to delete ${data.title}? `
      );
      if (confirmed) this.todoListService.deleteTask(data.id, data.listId);
    }
  }

  public onCheckTask(task: Task): void {
    const updatedTask = {
      ...task,
      checked: !task.checked
    };
    console.log(updatedTask);
    this.todoListService.updateTask(updatedTask);
  }

  public onEditItem(data: TodoList | Task, cardType: string): void {
    this.editItem.emit({ data, cardType });
  }
}
