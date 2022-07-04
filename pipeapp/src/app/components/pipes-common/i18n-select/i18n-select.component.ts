import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrls: ['./i18n-select.component.css']
})
export class I18nSelectComponent implements OnInit {

  genero = 'm'
  genero2 = 'f'
  genero3 = 'm1'

  mensajes = {
    "m":"Bienvenido Usuario",
    "f":"Bienvenida Usuaria",
    "other":"Registro no completado..."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
