import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required ],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: false,
  }

  constructor(private fb: FormBuilder) { }

  

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      terminos: false
   });

   //subcribirse a los cambios del formulario
  //  this.miFormulario.valueChanges.subscribe( form => {
  //   delete form.terminos;

  //   console.log(form);  
  //   this.persona = form;
    
  //  });

   this.miFormulario.valueChanges.subscribe( ({terminos, ...form}) => {
    console.log(form);  
    this.persona = form;
    
   });

  //subcribirse a los cambios del formulario solo aun campo
   this.miFormulario.get('terminos')?.valueChanges.subscribe( input => {
    console.log(input);
    if (input) {
      console.log('cambio el campo terminos');
    }
   });
  }
  
  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;
    this.persona = formValue;


    console.log(formValue);
  }




}
