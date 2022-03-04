import { Injectable } from '@angular/core';
import Swal from'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    mostraAlertaSimpleSuccess(mensaje:string,titulo:string){
        Swal.fire({
        icon: 'success',
        title: titulo,
        text: mensaje,
        })
    }

    mostrarAlertaSimpleError(mensaje: string, titulo: string){
        Swal.fire({
            icon: 'error',
            title: titulo,
            text: mensaje,
        })
    }

}
