import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimateModule } from './animation/animate.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubCalendarComponent } from './profile/github-calendar/github-calendar.component';
import { ProfileModule } from './profile/profile.module';
import { GithubRepoCardComponent } from './profile/projects/github-repo-card/github-repo-card.component';
import { GraphQLModule } from './profile/projects/graphql.module';
import { RecaptchaFormsModule, RecaptchaModule, ReCaptchaV3Service, RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,

    HttpClientModule,
    GraphQLModule,
    AnimateModule,
    RecaptchaFormsModule,

    RecaptchaModule,
    RecaptchaV3Module,
    BrowserAnimationsModule




  ],
  providers: [ReCaptchaV3Service, { provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule { }
