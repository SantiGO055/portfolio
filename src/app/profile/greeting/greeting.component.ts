import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Santiago Gonzalez",
    title: "Hola, soy Santiago",
    subTitle: "Un apasionado programador 🚀 con experiencia construyendo aplicaciones web y mobile con javascript, Angular Js, Ionic y muchas mas librerias y frameworks",
    resumeLink: "https://drive.google.com/file/d/1A3tHGJq-_7_DmQJA-K55TKnH66PRA4jG/view?usp=sharing"
  }
  ngOnInit(): void {
  }

}
