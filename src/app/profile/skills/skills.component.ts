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
    subTitle: "FULL STACK DEVELOPER JUNIOR DONDE QUIERO EXPLORAR TODO SOBRE EL STACK TECNOLOGICO",
    skills: [
      "⚡ Desarrollo de Front end / Interfaz de usuario para aplicaciones web y móviles",
      "⚡ Creación de aplicaciones backend en Node.js y PHP",
      "⚡ Progressive Web App ( PWA )",
      "⚡ Integracion con servicio de terceros como Firebase/ Heroku/ AWS",
    ]
  };
  ngOnInit(): void {
  }

}
