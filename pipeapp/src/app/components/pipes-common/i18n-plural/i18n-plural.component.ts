import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrls: ['./i18n-plural.component.css']
})
export class I18nPluralComponent implements OnInit {

  notificacion:number = 0;
  mensaje ={
    "=0":'No tienes ninguna notificacion',
    "=1":"Tienes una notificacion",
    "other":"Tienes # notificaciones",
  }

  addNotificacion(){
    this.notificacion++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
