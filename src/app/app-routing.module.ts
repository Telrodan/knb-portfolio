import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactComponent } from './features/contact/contact.component';
import { LandingComponent } from './features/landing/landing.component';

const worksModule = () =>
  import('./features/works/works.module').then((m) => m.WorksModule);

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  { path: 'works', loadChildren: worksModule },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
