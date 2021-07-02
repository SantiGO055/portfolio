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
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { TopButtonComponent } from './top-button/top-button.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ProfileComponent,
    NotFoundComponent,
    HeaderComponent,
    GreetingComponent,
    SocialMediaComponent,
    SkillsComponent,
    SoftwareSkillComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    TopButtonComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [ProfileComponent,
    NotFoundComponent,
    HeaderComponent,
    GreetingComponent,
    SocialMediaComponent,
    SkillsComponent,
    SoftwareSkillComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    TopButtonComponent,
    FooterComponent,]
})
export class ProfileModule { }
