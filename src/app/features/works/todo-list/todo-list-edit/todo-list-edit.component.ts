import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalService } from 'src/app/core/services/modal.service';
import { TodoListService } from 'src/app/core/services/works/todo-list.service';

@Component({
  selector: 'knb-portfolio-todo-list-edit',
  templateUrl: './todo-list-edit.component.html',
  styleUrls: ['./todo-list-edit.component.scss']
})
export class TodoListEditComponent implements OnInit, OnChanges {
  public editForm: FormGroup;
  @Input() public editedItem: any;

  constructor(
    public modalService: ModalService,
    private todoListService: TodoListService
  ) {}

  public ngOnInit(): void {
    this.editForm = new FormGroup({
      editedName: new FormControl('null', Validators.required)
    });
  }

  public ngOnChanges(): void {
    if (this.editedItem) {
      this.editForm.patchValue({
        editedName: this.editedItem.data.title
      });
    }
  }

  public editItem(): void {
    if (this.editForm.dirty) {
      if (this.editedItem.cardType === 'list') {
        const list = {
          ...this.editedItem.data,
          title: this.editForm.value.editedName
        };
        this.todoListService.updateList(list);
      } else {
        const task = {
          ...this.editedItem.data,
          title: this.editForm.value.editedName
        };
        this.todoListService.updateTask(task);
      }
    }
    this.editForm.reset();
    this.modalService.toggleModal();
  }
}
