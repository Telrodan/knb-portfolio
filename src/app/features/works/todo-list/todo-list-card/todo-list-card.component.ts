import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import {
  faTrash,
  faCheck,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';

import { Subject, takeUntil } from 'rxjs';

import { Task, TodoList } from 'src/app/core/models/todo-list.model';
import { ConfirmationModalService } from 'src/app/core/services/confirmation-modal.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { TodoListService } from 'src/app/core/services/works/todo-list.service';

@Component({
  selector: 'knb-portfolio-todo-list-card',
  templateUrl: './todo-list-card.component.html',
  styleUrls: ['./todo-list-card.component.scss']
})
export class TodoListCardComponent implements OnInit, OnDestroy {
  @Input() public data: any;
  @Input() public cardType: string;
  @Output() public editEvent: EventEmitter<Task | TodoList> =
    new EventEmitter();

  public selectedList: TodoList;

  public destroy = new Subject();

  public faTrash = faTrash;
  public faCheck = faCheck;
  public faPenToSquare = faPenToSquare;

  constructor(
    private todoListService: TodoListService,
    private modalService: ModalService,
    private confirmationModalService: ConfirmationModalService
  ) {}

  public ngOnInit(): void {
    this.todoListService.selectedListChanges$
      .pipe(takeUntil(this.destroy))
      .subscribe((selectedList) => {
        this.selectedList = selectedList;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  public async onDelete(data: any): Promise<void> {
    switch (this.cardType) {
      case 'list': {
        const confirmed = await this.confirmationModalService.confirmAction(
          'Delete List',
          `Are you sure you want to delete ${data.name} list? `
        );
        if (confirmed) this.todoListService.deleteList(data.id);
        break;
      }
      case 'task': {
        const confirmed = await this.confirmationModalService.confirmAction(
          'Delete Task',
          `Are you sure you want to delete ${data.name} task? `
        );
        if (confirmed) this.todoListService.deleteTask(data.id);
        break;
      }
    }
  }

  public onCheckTask(task: Task): void {
    task.checked = !task.checked;
  }

  public onEdit(data: TodoList | Task): void {
    this.editEvent.emit(data);
  }
}
