import { FormControl } from '@angular/forms';

//NOTA: sirve para validaciones sencillas

export const nombreApellidoPatter: string = '([a-zA-Z+]+) ([a-zA-Z]+)';
export const emailPatter: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const  noPuedeSerStrider = (control: FormControl) => {
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