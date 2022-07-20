import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {

  isValid: boolean = true;

  @ViewChild('miFormulario')
  miFormulario!: NgForm

  initialState = {
    proyecto: '',
    horas: 0,
    tecnologias: ''
  }
  tecnologias: Array<string> = []

  proyectos: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void {

    if (this.initialState.proyecto === '' || this.initialState.tecnologias === '') {
      this.isValid = false
      return
    } else {
      this.isValid = true
    }


    if (this.miFormulario.controls["tecnologia"].invalid) {
      return;
    }
    this.proyectos.push({
      proyecto: this.miFormulario.controls["proyecto"].value,
      horas: this.miFormulario.controls["horas"].value,
      tecnologias: this.tecnologias

    })

    this.miFormulario.resetForm({
      proyecto: '',
      horas: 0,
      tecnologias: ''
    })
    this.tecnologias = []
    console.log(this.proyectos)

  }

  agregarTecnologia(): void {
    if (this.miFormulario.controls["tecnologia"].invalid) {
      return;
    }

    this.tecnologias.push(this.miFormulario.controls["tecnologia"].value)
    this.miFormulario.resetForm({
      ...this.miFormulario.value,
      tecnologia: ""

    })
  }
}
