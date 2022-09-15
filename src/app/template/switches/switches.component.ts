import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {
  @ViewChild('miFormulario', { static: true }) miFormulario!: NgForm;
 
  persona = {
    genero : '',
    notificaciones: false
  }

  terminos: boolean = true;

}
