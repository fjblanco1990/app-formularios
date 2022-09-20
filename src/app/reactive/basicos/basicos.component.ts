import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Juan manuel blanco', Validators.required),
  //   'precio': new FormControl(0,Validators.required),
  //   'existencias': new FormControl(10),

  // });

  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializatorForm();

    //para inizializar un formulario asi:
    this.miFormulario.reset({
      nombre: 'Juan Manuel Blanco',
      precio: 15000000,
    
    });
    
  }
  guardar(){
    if(this.miFormulario.invalid) { //se podria crear un servicio para que se realize esta validacion a cada formulario
      this.miFormulario.markAllAsTouched();
      return; //se puede utilizar para cancelar cualquier tipo de ejecucion
    }
    // 
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

  camposNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  initializatorForm() {
    this.miFormulario = this.fb.group({
      // [valor_del_campo, Validadores_sincronos, ]
      //para definir mas de un validador sincrono se hace asi: [ 'Juan manuel blanco', [ Validators.required] ],
      nombre: [ null, [ Validators.required, Validators.pattern("[a-zA-Z ]{2,254}"), Validators.minLength(3)] ],
      precio: [ null,  [Validators.required, Validators.min(0)] ],
      existencias: [null, [Validators.required, Validators.min(0)]]
    });
  }




}
