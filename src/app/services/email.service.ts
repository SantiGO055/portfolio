import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  
  constructor() {
    init("user_qOzALb8QuxtW7Iy9808vc");
   }


   public sendEmail(mensaje: string, email:string,nombre:string, celular:number = 0) {
    let templateParams =  {
      from_name: nombre,
      from_email: email,
      phone: celular,
      message: mensaje,

    }
    emailjs.send('service_8nbxk1x', 'template_vumatvl', templateParams)
    .then((result: EmailJSResponseStatus) => {

      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
}
