import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SkillsComponent } from './skills/skills.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { GithubCalendarComponent } from './github-calendar/github-calendar.component';
import { GithubRepoCardComponent } from './projects/github-repo-card/github-repo-card.component';
import { AppComponent } from '../app.component';
import { ExperienceCardComponent } from './experience/experience-card/experience-card.component';
import { AnimateModule } from '../animation/animate.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
        HeaderComponent,

      GreetingComponent,
        // ButtonComponent,
        SocialMediaComponent,
        SkillsComponent,
        SoftwareSkillComponent,
        // SkillProgressComponent,
        FooterComponent,
        TopButtonComponent,
        ContactComponent,
        // TimelineComponent,
        ExperienceComponent,
        // ExperienceCardComponent,
        GithubRepoCardComponent,
        ProjectsComponent,
        EducationComponent,
        GithubCalendarComponent,
        ExperienceCardComponent,
        
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    
    
  ],
  exports: [HeaderComponent,

    GreetingComponent,
      // ButtonComponent,
      SocialMediaComponent,
      SkillsComponent,
      SoftwareSkillComponent,
      // SkillProgressComponent,
      FooterComponent,
      TopButtonComponent,
      ContactComponent,
      // TimelineComponent,
      ExperienceComponent,
      // ExperienceCardComponent,
      GithubRepoCardComponent,
      ProjectsComponent,
      EducationComponent,
      GithubCalendarComponent]
})
export class ProfileModule { }
