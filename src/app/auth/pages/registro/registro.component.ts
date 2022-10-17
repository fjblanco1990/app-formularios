import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombreApellidoPatter, emailPatter, noPuedeSerStrider } from 'src/app/shared/validators/validations';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from './../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPatter)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPatter) ], [ this.emailValidator ]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider ]],
    password: ['', [Validators.required, Validators.minLength(6) ]],
    password_confirm: ['', [Validators.required, Validators.minLength(6) ]]
   
  } , {
     //el otro objeto al final es otro son opciones que podemos enviar al form Group

     validators: [ this.vs.passwordsIgual('password', 'password_confirm') ]

  })

 
  
 get emialErrorMsg() {
    const error = this.miFormulario.get('email')?.errors;
    if (error?.['required']) {
      return 'Email obligatorio';
    } else if (error?.['pattern']) {
      return 'El email no tiene el formato correcto';
    } else if (error?.['emailTomado']) { 
      return 'El email ingresado ya esta en uso';
    }
    return;
  }
  

  constructor(private fb: FormBuilder, private vs: ValidatorService, private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    //dar valores a los formularios
    this.miFormulario.reset( {
      nombre: 'Francisco Blanco',
      email: 'test@correo.com',
      username: 'Blanco1990',
      password: '123456',
      password_confirm: '123456'
    })
  }

  submitFormulario() {
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
    return;

  }

  campoNoValid( campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  // controlRequired(campo: string) {
  //   return this.miFormulario.get(campo)?.errors?.['required'] && this.miFormulario.get(campo)?.touched;
  // }

  // controlPatter(campo: string) {
  //   return this.miFormulario.get(campo)?.errors?.['pattern'] && this.miFormulario.get(campo)?.touched;
  // }

  // controlEmailTomado(campo: string) {
  //   return this.miFormulario.get(campo)?.errors?.['emailTomado'] && this.miFormulario.get(campo)?.touched;
  // }




}
