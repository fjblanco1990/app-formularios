import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPatter: string = '([a-zA-Z+]+) ([a-zA-Z]+)';
  public emailPatter: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null | undefined {
    //trim es para eliminar cualquier espacio
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'strider') {
      //si se regresa un objeto es conciderado un error
      return  {
        noStrider: true
      }
    }
    return;
  }

  passwordsIgual(controlUno: string, controlDos: string) {
    return (formGroup: AbstractControl): ValidationErrors | null | undefined => {
      const pass1 = formGroup.get(controlUno)?.value;
      const pass2 = formGroup.get(controlDos)?.value;

      console.log(pass1, pass2);
      
      if (pass1 !== pass2) {
        formGroup.get(controlDos)?.setErrors({noIgual: true});
        return { noIgual: true }
      } 
      
      formGroup.get(controlDos)?.setErrors(null);
      
      return;
    }
  }
}
