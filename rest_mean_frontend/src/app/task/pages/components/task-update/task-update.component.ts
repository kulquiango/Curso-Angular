import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { InputData } from 'src/app/shared/Interface/InputData';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent implements OnInit {
  user: any;
  miFormulario: FormGroup = this.formBuilder.group({
    updateTask: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.activatedRouter.params.subscribe((params) => {
      this.miFormulario.setValue({ updateTask: params['name'] });
    });
  }

  inputData: Array<InputData> = [
    {
      id: 'updateTask',
      formControlNameForm: 'updateTask',
      type: 'text',
      label: 'Nombre Tarea',
      textSpan: 'Actualizar Tarea',
      hasValidator: false,
    },
  ];
}
