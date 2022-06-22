import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../../../../ListadoPersonas/src/app/persona.model';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  persona={
    nombre:'Kevin',
    edad:21,
    ocupacion:'developer',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
