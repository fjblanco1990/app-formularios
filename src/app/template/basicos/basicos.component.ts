import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario', { static: true }) miFormulario!: NgForm; //sirve para acceder a las referencias locales 
  constructor() { }

  ngOnInit(): void {
  }
  // guardar(fortmulario: any) {
  guardar() {
    console.log(this.miFormulario);
    
  }

  nombreValid(): boolean {
    return (this.miFormulario?.controls['producto'].invalid &&
            this.miFormulario?.controls['producto'].touched);
  }

  precioValid(): boolean {
    return (this.miFormulario?.controls['precio'].invalid &&
            this.miFormulario?.controls['precio'].touched);
  }
}
