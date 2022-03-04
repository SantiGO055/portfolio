import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';
import { AlertService } from 'src/app/services/alert.service';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  
  constructor(private alert :AlertService) {
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
      alert.mostraAlertaSimpleSuccess("Mensaje enviado correctamente","Enviado!");
      alert.mostrarAlertaSimpleError("El mensaje no se pudo enviar, intentá de nuevo en unos minutos");
      console.log(result.text);
    }, (error) => {
      alert.mostrarAlertaSimpleError("El mensaje no se pudo enviar, intentá de nuevo en unos minutos");
      console.log(error.text);
    });
  }
}
