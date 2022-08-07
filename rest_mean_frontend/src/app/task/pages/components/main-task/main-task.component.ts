import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputData } from 'src/app/shared/Interface/InputData';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent implements OnInit {
  user: any;
  miFormulario: FormGroup = this.formBuilder.group({
    newTask: ['', [Validators.required, Validators.minLength(3)]],
  });
  private tasks: Array<any> = [];
  constructor(
    private crudService: CrudService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.crudService.read().subscribe((res) => {
      this.tasks = res.tareas;
    });
  }

  getTasks() {
    return this.tasks;
  }

  delete(id: string) {
    this.crudService.delete(id).subscribe((response) => {
      this.crudService.read().subscribe((res) => {
        this.tasks = res.tareas;
      });
    });
  }

  update(task: any) {
    const { _id, name } = task;
    this.router.navigateByUrl(`/task/${_id}/${name}`);
  }

  updateListTask(e: any) {
    this.tasks = e;
  }
  inputData: Array<InputData> = [
    {
      id: 'newTask',
      formControlNameForm: 'newTask',
      type: 'text',
      label: 'Nombre Tarea',
      textSpan: 'Crear Tarea',
      hasValidator: false,
    },
  ];
}
