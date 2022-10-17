import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu.interfaces';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  template_menu: MenuItem [] = [
    {
      text: 'Baiscos',
      ruta: './template/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './template/switches'
    }
  ]

  reactive_menu: MenuItem [] = [
    {
      text: 'Baiscos',
      ruta: './reactive/basicos'
    },
    {
      text: 'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './reactive/switches'
    }
  ]

  atuh_menu: MenuItem [] = [
    {
      text: 'Registro',
      ruta: '/auth/registro'
    },
    {
      text: 'Login',
      ruta: '/auth/login'
    }
  ]


}
