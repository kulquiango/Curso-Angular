import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    teconologia: this.fb.control(''),
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
