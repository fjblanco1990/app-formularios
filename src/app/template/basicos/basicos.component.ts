import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario', { static: true }) miFormulario!: NgForm; //sirve para acceder a las referencias locales 

  initailform = {
    producto: '',
    precio: 0,
    existencia: 10
  }

  constructor() { }

  ngOnInit(): void {

  }
  // guardar(fortmulario: any) {
  guardar() {//en el resetForm , puedo enviar un objeto que tenga la informacion que yo quiera despues de limpiar el formulario 
    this.miFormulario.resetForm({
        precio: 0,
        existencia:0
    });
    

    
  }

  nombreValid(): boolean {
    return (this.miFormulario?.controls['producto'].invalid &&
            this.miFormulario?.controls['producto'].touched);
  }

  precioValid(): boolean {
    return (this.miFormulario?.controls['precio'].touched && this.miFormulario?.controls['precio'].value < 0);
  }
}
