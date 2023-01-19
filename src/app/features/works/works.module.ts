import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WorksDemoComponent } from './works-demo/works-demo.component';
import { WorksRoutingModule } from './works-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListCardComponent } from './todo-list/todo-list-card/todo-list-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorksCardComponent } from './works-card/works-card.component';
import { WorksComponent } from './works.component';

@NgModule({
  declarations: [
    WorksComponent,
    WorksDemoComponent,
    WorksCardComponent,
    TodoListComponent,
    TodoListCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorksRoutingModule,
    FontAwesomeModule
  ]
})
export class WorksModule {}
