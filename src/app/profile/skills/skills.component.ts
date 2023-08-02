import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skillsSection = {
    title: "Sobre mi💁‍♂️",
    subTitle: "FULL STACK DEVELOPER CON EXPERIENCIA EN LAS SIGUIENTES TECNOLOGIAS",
    skills: [
      "⚡ Desarrollo de Front end / Interfaz de usuario para aplicaciones web y móviles",
      "⚡ Creación de aplicaciones backend en Node.JS, Nest.JS, C# .NET",
      "⚡ Progressive Web Apps",
      "⚡ Integracion con servicio de terceros como Firebase, AWS",
    ]
  };
  ngOnInit(): void {
  }

}
