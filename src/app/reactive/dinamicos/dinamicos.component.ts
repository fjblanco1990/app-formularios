import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  // usuariosList: any = [
  //   {
  //     nombre: 'algo 1',
  //     apellido: 'apellido 1',
  //     termino: false,
  //     edit: false
  //   },
  //   {
  //     nombre: 'nombre 2',
  //     apellido: 'apellido 2',
  //     termino: true,
  //     edit: true
  //   }
  // ]

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      //colecciones de form control
      this.fb.control('Call of duty'),
      ['Articulate'],
      ['Diseñador grafico']
    ], Validators.required ),
    usuarios: this.fb.array([
      this.fb.group(
        {
          nombre: ['algo 1'],
          apellido: ['apellido 1'],
          terminos: [false],
          edit: [false]
        }),
      this.fb.group(
        {
          nombre: ['nombre 2'],
          apellido: ['apellido 2'],
          terminos: [true],
          edit: [true]
        })
    ])
  });

  //creacion de un solo control
   nuevoFavorito: FormControl = this.fb.control('', Validators.required);
   //dos formas de hacerlo
  // nuevoFavorito!: FormControl = new FormControl(['', Validators.required]);
  
  public get arregloFavoritos() : FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  
  usuariosForm: FormGroup<any> = this.fb.group({
    nombre: [null],
    apellido: [null],
    terminos: [false]
    // edit: [null]
  })

  public get usuariosArray() : FormArray {
    return this.miFormulario.get('usuarios') as FormArray;
  }

  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.listarUsuarios();
  }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  addFavoritos() {
    if( this.nuevoFavorito.invalid ) {
      this.nuevoFavorito.markAllAsTouched();
      return;
    }
    //varias opciones
    //asi se agrega un valor al array 
    // (this.miFormulario.controls['favorito'] as FormArray).push( new FormControl(this.nuevoFavorito.value));
    // (this.miFormulario.controls['favorito'] as FormArray).push( this.fb.control(this.nuevoFavorito.value));

    // this.arregloFavoritos.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.arregloFavoritos.push(this.fb.control(this.nuevoFavorito.value));

    console.log(this.nuevoFavorito.value);
    this.nuevoFavorito.reset();

  }

  deleteFavoritos(index: number) {
    //asi se elimina controles del array Form
    this.arregloFavoritos.removeAt(index);
  }

  addUsuarios() {
    const user = this.fb.group({
      nombre: [ this.usuariosForm.controls['nombre'].value],
      apellido: [ this.usuariosForm.controls['apellido'].value],
      terminos: [false],
      edit: [true]
    })
    this.usuariosArray.push(user);
    this.usuariosForm.reset();
  }

  enabledInput(i: number) {

    this.usuariosArray.controls[i].get('edit')?.setValue(true);
    !this.usuariosArray.controls[i].get('terminos')?.setValue(false);
  }

  disabledInput(i: number) {
    (!this.usuariosArray.controls[i].get('terminos')?.value) ?  this.usuariosArray.controls[i].get('edit')?.setValue(false):  this.usuariosArray.controls[i].get('edit')?.setValue(true);
   

  }


  deleteUsuarios(i: number){
    this.usuariosArray.removeAt(i);
  }

  guardar() {
    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  // listarUsuarios() {
  //   this.usuariosList.forEach((user: any) => {
  //     const userList = this.fb.group({
  //       nombre: [user.nombre],
  //       apellido: [user.apellido],
  //       terminos: [user.termino],
  //       edit: [true]
  //     });
  //     this.usuariosArray.push(userList);

  //   });
    
  // }

}
