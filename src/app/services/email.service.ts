import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';
import { AlertService } from './alert.services';
@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor(public alertaSvc: AlertService) {
    init("eH3QUVJEFCjU25omp");
  }


  public sendEmail(mensaje: string, email: string, nombre: string, celular: number = 0) {
    let templateParams = {
      from_name: nombre,
      from_email: email,
      phone: celular,
      message: mensaje,

    }
    emailjs.send('service_m9mft6l', 'template_pv8xmeg', templateParams)
      .then((result: EmailJSResponseStatus) => {
        this.alertaSvc.mostraAlertaSimpleSuccess("Mensaje enviado correctamente", "Enviado!");
        // this.alertaSvc.mostrarAlertaSimpleError("El mensaje no se pudo enviar, intentá de nuevo en unos minutos");
        console.log(result.text);
      }, (error) => {
        this.alertaSvc.mostrarAlertaSimpleError("El mensaje no se pudo enviar, intentá de nuevo en unos minutos", "ERROR!");
        console.log(error.text);
      });
  }
}
