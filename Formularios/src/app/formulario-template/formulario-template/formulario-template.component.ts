import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  @ViewChild('miFormulario')
  miFormulario!: NgForm


  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void { console.log("Enviado correctamente"); }
}
