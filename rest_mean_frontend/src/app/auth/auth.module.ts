import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterScreenComponent } from './pages/register-screen/register-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { CommonModule } from '@angular/common';
import { SharedCustomModule } from '../shared/sharedCustom.module';

@NgModule({
  declarations: [LoginScreenComponent, RegisterScreenComponent],
  imports: [CommonModule, AuthRoutingModule, SharedCustomModule],
})
export class AuthModule {}
