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
    resumeLink: "https://drive.google.com/drive/folders/1MzMNp9FLA1b-g8r3JhRUaDxa_z9fXhVX"
  }
  ngOnInit(): void {
  }

}
