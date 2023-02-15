import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoList } from 'src/app/core/models/todo-list.model';
import { TodoTask } from 'src/app/core/models/todo-task.model';

import { ModalService } from 'src/app/core/services/modal.service';
import { TodoListService } from 'src/app/core/services/works/todo-list.service';

interface EditedItem {
  cardType: string;
  data: any;
}

@Component({
  selector: 'knb-portfolio-todo-list-edit',
  templateUrl: './todo-list-edit.component.html',
  styleUrls: ['./todo-list-edit.component.scss']
})
export class TodoListEditComponent implements OnInit, OnChanges {
  public editForm: FormGroup;
  @Input() public editedItem: EditedItem;

  constructor(
    public modalService: ModalService,
    private todoListService: TodoListService
  ) {}

  public ngOnInit(): void {
    this.editForm = new FormGroup({
      editedName: new FormControl('', Validators.required)
    });
  }

  public ngOnChanges(): void {
    if (this.editedItem) {
      const editedItemName =
        this.editedItem.cardType === 'list'
          ? this.editedItem.data.listName
          : this.editedItem.data.taskName;
      this.editForm.patchValue({
        editedName: editedItemName
      });
    }
  }

  public editItem(): void {
    if (this.editForm.valid || this.editForm.dirty) {
      if (this.editedItem.cardType === 'list') {
        const list: TodoList = {
          ...this.editedItem.data,
          listName: this.editForm.value.editedName
        };
        this.todoListService.updateList(list);
      } else {
        const task: TodoTask = {
          ...this.editedItem.data,
          taskName: this.editForm.value.editedName
        };
        this.todoListService.updateTask(task);
      }
    }
    // this.editForm.reset();
    this.modalService.toggleModal();
  }
}
