import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTPInterceptor } from './core/interceptors/http.interceptor';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './features/landing/landing.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutMeCardComponent } from './features/about-me/about-me-card/about-me-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutMeComponent,
    ContactComponent,
    AboutMeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppModule {}
