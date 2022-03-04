import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  
  constructor() {
    init("eH3QUVJEFCjU25omp");
   }


   public sendEmail(mensaje: string, email:string,nombre:string, celular:number = 0) {
    let templateParams =  {
      from_name: nombre,
      from_email: email,
      phone: celular,
      message: mensaje,

    }
    emailjs.send('service_m9mft6l', 'template_pv8xmeg', templateParams)
    .then((result: EmailJSResponseStatus) => {

      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
}
