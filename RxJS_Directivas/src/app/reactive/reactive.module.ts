import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveContainerComponent } from './reactive-container/reactive-container.component';



@NgModule({
  declarations: [
    ReactiveContainerComponent
  ],
  imports: [
    CommonModule
  ],exports: [ReactiveContainerComponent]
})
export class ReactiveModule { }
