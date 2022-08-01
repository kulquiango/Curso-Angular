import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputData } from '../../Interface/InputData';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css'],
})
export class RegisterScreenComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  inputData: Array<InputData> = [
    {
      id: 'Username',
      formControlNameForm: 'username',
      type: 'text',
      label: 'Nombre de usuario',
      textSpan: 'Example Username',
      hasValidator: false,
    },
    {
      id: 'Email',
      formControlNameForm: 'email',
      type: 'email',
      label: 'Correo Electronico',
      textSpan: 'email@example.com',
      hasValidator: true,
    },
    {
      id: 'Password',
      formControlNameForm: 'password',
      type: 'password',
      label: 'Contraseña',
      textSpan: 'Mínimo 6 caracteres',
      hasValidator: false,
    },
    {
      id: 'PasswordConfirm',
      formControlNameForm: 'confirmPassword',
      type: 'password',
      label: 'Confirmar Contraseña',
      textSpan: 'La contraseña debe ser igual al campo anterior',
      hasValidator: false,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
