import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Técnico universitario en programación",
      duration: "2021",
      subtitle: "UTN, Avellaneda",
      content: "Terminando la carrera de tecnico en programación",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Curso de PHP",
      duration: "2016",
      subtitle: "UBA, Capacitarte",
      content: "Realice un curso de PHP construyendo una api de manejo inventario",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Escuela Técnica N°1",
      duration: "2014",
      subtitle: "Saladillo, Buenos Aires",
      content: "Termine mis estudios de la secundaria en la escuela tecnica con orientacion en informatica",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
