import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './works.component';
import { WorksDemoComponent } from './works-demo/works-demo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PayApiComponent } from './pay-api/pay-api.component';
import { PayApiHomeComponent } from './pay-api/pay-api-home/pay-api-home.component';

const routes: Routes = [
  { path: '', component: WorksComponent, children: [] },
  {
    path: 'demo',
    component: WorksDemoComponent,
    children: [
      { path: 'todo-list', component: TodoListComponent },
      {
        path: 'pay-api',
        component: PayApiComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: PayApiHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {}
