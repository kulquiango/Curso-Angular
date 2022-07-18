import { NgModule } from '@angular/core';
import { FormularioTemplateComponent } from './formulario-template/formulario-template.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from '../common/custom-common.module';

@NgModule({
  declarations: [
    FormularioTemplateComponent
  ],
  imports: [
    CommonModule, FormsModule, CustomCommonModule
  ], exports: [
    FormularioTemplateComponent
  ]
})
export class FormularioTemplateModule { }
