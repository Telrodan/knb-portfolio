import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

import { Subject, takeUntil, tap } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoListService } from 'src/app/core/services/works/todo-list.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'knb-portfolio-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit, OnDestroy {
  @ViewChild('editInput') public editInput: ElementRef;
  public todoLists: TodoList[];
  public editedItem: any;
  public selectedList: TodoList;
  public addListForm: FormGroup;
  public addTaskForm: FormGroup;
  public isLoading = true;
  public faPlus = faPlus;
  private destroy = new Subject();

  constructor(
    public todoListService: TodoListService,
    public modalService: ModalService
  ) {}

  public ngOnInit(): void {
    this.todoListService.getLists();
    this.createForms();
    this.todoListService
      .getListUpdatedListener$()
      .pipe(
        tap((todoLists) => {
          this.todoLists = todoLists;
          if (!this.selectedList) this.selectedList = this.todoLists[0];
        }),
        takeUntil(this.destroy)
      )
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  public addList(): void {
    const listName = this.addListForm.value.listName
      .trim()
      .replace(/^\w/, (c: string) => c.toUpperCase());
    if (listName && this.addListForm.valid) {
      this.todoListService.addList(listName);
      this.addListForm.reset();
    }
  }

  public addTask(): void {
    const taskName = this.addTaskForm.value.taskName
      .trim()
      .replace(/^\w/, (c: string) => c.toUpperCase());
    if (taskName && this.addTaskForm.valid) {
      this.todoListService.addTask(taskName, this.selectedList.id, false);
      this.addTaskForm.reset();
    }
  }

  public createForms(): void {
    this.addListForm = new FormGroup({
      listName: new FormControl(null, Validators.required)
    });
    this.addTaskForm = new FormGroup({
      taskName: new FormControl(null, Validators.required)
    });
  }

  public selectList(list: TodoList): void {
    this.selectedList = list;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onEditItemEvent(editedItem: any) {
    this.editedItem = { ...editedItem };
    this.modalService.toggleModal();
  }

  public changeSelectedList(): void {
    this.selectList(this.todoLists[0]);
  }
}
