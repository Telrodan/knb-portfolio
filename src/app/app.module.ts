import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './features/landing/landing.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutMeCardComponent } from './features/about-me/about-me-card/about-me-card.component';
import { LandingIntroComponent } from './features/landing/landing-intro/landing-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutMeComponent,
    ContactComponent,
    AboutMeCardComponent,
    LandingIntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppModule {}
