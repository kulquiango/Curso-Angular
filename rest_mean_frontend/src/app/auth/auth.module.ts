import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    LoginScreenComponent,
    RegisterScreenComponent,
    ButtonComponent,
    FormReactiveComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
