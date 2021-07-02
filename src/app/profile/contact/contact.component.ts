import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public formGroup!: FormGroup;

  public contactInfo = {
    title: "Contactame ☎️",
    subtitle: "Completa el formulario para contactarme.",
    
  };
  constructor(
    private fb:FormBuilder,
    private emailjs: EmailService

  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      // 'tipo': ['',Validators.required],
      'telefono': ['',[Validators.required]],
      'mensaje': ['',[Validators.required]],
      
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      
    });
  }
  enviarMail(){
    this.emailjs.sendEmail(this.formGroup.get('nombre')?.value,'asd@asd.asd','pruebita');

  }
    

}