import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectsRoutingModule } from './proyects-routing.module';
import { ProyectsComponent } from './proyects.component';
import { RouterModule } from '@angular/router';
import { InformactionComponent } from './informaction/informaction.component';


@NgModule({
  declarations: [
    ProyectsComponent,
    InformactionComponent
  ],
  imports: [
    CommonModule,
    ProyectsRoutingModule,
    RouterModule
  ]
})
export class ProyectsModule { }
