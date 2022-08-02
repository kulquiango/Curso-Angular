import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputData } from '../../Interface/InputData';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: ['kulquiango@gmail.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]],
  });

  inputData: Array<InputData> = [
    {
      id: 'Email',
      formControlNameForm: 'email',
      type: 'email',
      label: 'Email',
      textSpan: 'email@example.com',
      hasValidator: true,
    },
    {
      id: 'Password',
      formControlNameForm: 'password',
      type: 'password',
      label: 'Password',
      textSpan: 'Contraseña',
      hasValidator: false,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
