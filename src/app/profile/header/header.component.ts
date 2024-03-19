import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('routerTransition', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
    //     group([
    //       query(':enter', [
    //         style({ opacity:0 }),
    //         animate('1000ms ease-in-out', style({ opacity:1 }))
    //       ]),
    //       query(':leave', [
    //         style({ opacity:1 }),
    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
    //     ])
    //   ])
    // ])

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  greeting= {
<<<<<<< HEAD
    username: "Santiago Gonzalez"
=======
    username: "Santiago Gonzalez",
    title: "Hola, soy Santiago",
    subTitle: "Un apasionado programador 🚀 con experiencia construyendo aplicaciones web y mobile con javascript, Angular Js, Ionic y muchas mas librerias y frameworks",
    resumeLink: "https://drive.google.com/file/d/10SHhyGdYsQs6pEbDdQvgCS-KmPSZKSl0/view"
>>>>>>> 06b615283d6d2930191bd09afa9f2e605903c37a
  }
  ngOnInit(): void {
  }

}
