import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favoritos, Persona } from './../interfaces/personas.interfaces';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  @ViewChild('miFormulario', { static: true }) miFormulario!: NgForm;
  newJuego: string = '';
  persona: Persona = {
    nombre: 'Juan manuel blanco',
    
    favoritos: [
      { id: 1, nombre: 'Jugar call of duty' },
      { id: 2, nombre: 'Dibujar' },
      { id: 3, nombre:'Trabajar' }
    ]
  }

  guardar() {
    console.log(this.miFormulario)
  }

  agregar() {
    const nuevoFavorito: Favoritos= {
      id: this.persona.favoritos.length + 1,
      nombre: this.newJuego
    }
    this.persona.favoritos.push( {...nuevoFavorito} );
    this.newJuego = '';
  }

  eliminar(index:number) {
    this.persona.favoritos.splice(index,1);
  }
}
