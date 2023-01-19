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
import { PayApiComponent } from './pay-api/pay-api.component';
import { PayApiNavbarComponent } from './pay-api/pay-api-navbar/pay-api-navbar.component';
import { PayApiHomeComponent } from './pay-api/pay-api-home/pay-api-home.component';
import { PayApiHomeHeroComponent } from './pay-api/pay-api-home/pay-api-home-hero/pay-api-home-hero.component';

@NgModule({
  declarations: [
    WorksComponent,
    WorksDemoComponent,
    WorksCardComponent,
    TodoListComponent,
    TodoListCardComponent,
    PayApiComponent,
    PayApiNavbarComponent,
    PayApiHomeComponent,
    PayApiHomeHeroComponent
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
