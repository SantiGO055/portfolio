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
    AnimateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
