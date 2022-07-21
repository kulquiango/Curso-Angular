import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {
  /* Form Control
    miFormulario: FormGroup = new FormGroup({
      proyecto: new FormControl(''),
      horas: new FormControl(0),
      teconologia: new FormControl('')
    });
    es lo mismo que esta abajo pero se usa mejor el de abajo ↓
    */
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    // proyecto: this.fb.control("Valor Inicial", [Validaciones]),
    proyecto: this.fb.control("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    horas: this.fb.control(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(50)
    ]),
    tecnologias: this.fb.array([]),
  })

  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)
  ])

  proyectos: any[] = []

  validar(): boolean {
    return this.miFormulario.invalid && this.miFormulario.touched
  }
  get tecnologias() {
    return this.miFormulario.get("tecnologias") as FormArray
  }



  agregarTecnologia(): void {
    if (this.tecnologia.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    this.tecnologias.push(this.fb.control(this.tecnologia.value))
    this.tecnologia.reset()
    console.log(this.tecnologias.value)
  }

  agregarProyecto(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    this.proyectos.push(this.miFormulario.value);
    this.miFormulario.reset()
    this.tecnologias.clear()
  }
}
