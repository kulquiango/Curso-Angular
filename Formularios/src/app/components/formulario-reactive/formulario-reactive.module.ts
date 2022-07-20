import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive.component';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from 'src/app/common/custom-common.module';




@NgModule({
  declarations: [
    FormularioReactiveComponent
  ],
  imports: [ReactiveFormsModule, CommonModule, CustomCommonModule
  ], exports: [
    FormularioReactiveComponent
  ]
})
export class FormularioReactiveModule { }
