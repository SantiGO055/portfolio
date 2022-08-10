import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  phoneNumber!: string;

  public objInit: Contacts = {
    firstName: 'Coder',
    lastName: 'Byte',
    phoneNumber: 8885559999
  }
  public listContacts: Contacts[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listContacts.push(this.objInit);
  }
  submitContact() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.phoneNumber);

    let objAux: Contacts = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: parseInt(this.phoneNumber)
    }
    console.log(objAux)
    this.listContacts.push(objAux)
  }

}
export class Contacts {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
}