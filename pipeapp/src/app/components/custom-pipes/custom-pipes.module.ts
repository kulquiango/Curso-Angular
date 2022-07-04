import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';

@NgModule({
  declarations: [
    CustomContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomContainerComponent]
})
export class CustomPipesModule { }
