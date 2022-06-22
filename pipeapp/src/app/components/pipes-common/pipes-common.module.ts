import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextoComponent } from './texto/texto.component';
import { NumerosComponent } from './numeros/numeros.component';

import { FechaComponent } from './fecha/fecha.component';
import { JsonComponent } from './json/json.component';


@NgModule({
  declarations: [ContainerComponent, TextoComponent, NumerosComponent, FechaComponent, JsonComponent],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
