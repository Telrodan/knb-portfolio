import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

import { Subject, takeUntil } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Task, TodoList } from 'src/app/core/models/todo-list.model';
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
  public selectedList: TodoList;
  public editedElement: Task | TodoList;

  public addListForm: FormGroup;
  public addTaskForm: FormGroup;
  public editForm: FormGroup;

  public destroy = new Subject();

  public faPlus = faPlus;

  constructor(
    public todoListService: TodoListService,
    public modalService: ModalService
  ) {}

  public ngOnInit(): void {
    this.todoLists = this.todoListService.getLists();
    setTimeout(() => {
      this.selectedList = this.todoListService.getSelectedList();
      this.selectList(this.selectedList);
    }, 5);
    this.todoListService.todoListsChanges$
      .pipe(takeUntil(this.destroy))
      .subscribe((todoLists) => {
        this.todoLists = todoLists;
        this.selectedList = todoLists[0];
        setTimeout(() => {
          this.selectList(this.selectedList);
        }, 5);
      });
    this.todoListService.selectedListChanges$
      .pipe(takeUntil(this.destroy))
      .subscribe((todoList) => {
        this.selectedList = todoList;
      });
    this.createForms();
  }

  public ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  public createForms(): void {
    this.addListForm = new FormGroup({
      listName: new FormControl(null, Validators.required)
    });
    this.addTaskForm = new FormGroup({
      taskName: new FormControl(null, Validators.required)
    });
    this.editForm = new FormGroup({
      editedName: new FormControl(null, Validators.required)
    });
  }

  public addList(): void {
    const listName = this.addListForm.value.listName
      .trim()
      .replace(/^\w/, (c: string) => c.toUpperCase());
    const newList: TodoList = {
      id: uuidv4(),
      name: listName,
      tasks: []
    };
    this.todoListService.addList(newList);
    this.addListForm.reset();
  }

  public addTask(): void {
    const taskName = this.addTaskForm.value.taskName
      .trim()
      .replace(/^\w/, (c: string) => c.toUpperCase());
    const newTask: Task = {
      listId: this.selectedList.id,
      id: uuidv4(),
      checked: false,
      name: taskName
    };
    this.todoListService.addTask(newTask);
    this.addTaskForm.reset();
  }

  public selectList(list: TodoList): void {
    this.todoListService.selectList(list);
  }

  public onEdit(event: Task | TodoList) {
    this.editedElement = event;
    this.editInput.nativeElement.value = this.editedElement.name;
    this.modalService.toggleModal();
  }

  public editItem(): void {
    if (this.editForm.dirty) {
      const newName = this.editForm.value['editedName'];
      this.editedElement.name = newName;
    }
    this.editForm.reset();
    this.modalService.toggleModal();
  }
}
