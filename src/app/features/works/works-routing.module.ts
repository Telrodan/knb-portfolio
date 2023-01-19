import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WorksDemoComponent } from './works-demo/works-demo.component';
import { WorksComponent } from './works.component';

const routes: Routes = [
  { path: '', component: WorksComponent, children: [] },
  {
    path: 'demo',
    component: WorksDemoComponent,
    children: [{ path: 'todo-list', component: TodoListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule {}
