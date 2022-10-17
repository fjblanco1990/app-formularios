import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`).pipe(
      //delay sirve para ejecutar algo despues de cierto tiempo
      // delay(3000),
      map( respuesta => {
        return ( respuesta.length === 0 )? null: { emailTomado: true }
      })
    );
  }

}
