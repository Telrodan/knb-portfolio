import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './UI/spinner/spinner.component';
import { ConfirmationModalComponent } from './UI/confirmation-modal/confirmation-modal.component';
import { ModalComponent } from './UI/modal/modal.component';
import { LoadingSpinnerComponent } from './UI/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    SpinnerComponent,
    ConfirmationModalComponent,
    ModalComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    SpinnerComponent,
    ConfirmationModalComponent,
    ModalComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
