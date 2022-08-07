import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  declarations: [FormReactiveComponent, ButtonComponent],
  exports: [FormReactiveComponent, ButtonComponent],
})
export class SharedCustomModule {}
