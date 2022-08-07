import {
  Component,
  EventEmitter,
  Input,
  NgIterable,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CrudService } from 'src/app/service/crud.service';

import { Alert } from 'src/app/shared/Alert';
import { InputData } from '../../Interface/InputData';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() inputData!: NgIterable<InputData>;
  @Input() formName: string = '';
  @Input() textButton: string = '';
  @Input() routerLinkURL: string = '';
  @Input() routerLinkName: string = '';
  @Input() urlNavigate: string = '';
  @Input() action: string = '';
  @Input() divTitleIsActive: boolean = true;
  @Input() lengthDivTitle: string = 'col s12';
  @Input() classDiv: string = 'col s12';
  @Input() classLabel: string = '';
  @Output() newListTask = new EventEmitter<any>();

  id: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRouter: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {}
  navigate() {
    switch (this.action) {
      case 'login':
        this.authService.login(this.formGroup.value).subscribe((res) => {
          if (res === true) {
            localStorage.setItem('user', JSON.stringify(this.authService.user));
            this.router.navigateByUrl(this.urlNavigate);
          } else {
            Alert('error', 'Error...', res);
          }
        });

        break;
      case 'register':
        const { username, email, password, confirmPassword } =
          this.formGroup.value;

        if (
          email === '' ||
          password === '' ||
          confirmPassword === '' ||
          username === null
        ) {
          Alert('error', 'Error...', 'Debe llenar los campos');
        } else if (password === confirmPassword) {
          this.authService.register(this.formGroup.value).subscribe((res) => {
            if (res === true) {
              localStorage.setItem(
                'user',
                JSON.stringify(this.authService.user)
              );
              this.router.navigateByUrl(this.urlNavigate);
            } else {
              Alert('error', 'Error...', res);
            }
          });
        } else {
          Alert('error', 'Error...', 'Las contraseña no coinciden...');
        }

        break;

      case 'createTask':
        if (this.formGroup.invalid) {
          Alert('warning', 'Advertencia', 'Debe introducir la tarea');
        } else {
          this.crudService
            .create(this.formGroup.value.newTask)
            .subscribe((response) => {
              this.formGroup.reset();
              this.crudService.read().subscribe((res) => {
                this.newListTask.emit(res.tareas);
              });
            });
        }
        break;
      case 'updateTask':
        this.crudService
          .update(this.id, this.formGroup.value.updateTask)
          .subscribe((res) => {
            this.router.navigateByUrl('/task');
          });

        break;
      default:
        console.log('Action not supported');
    }
  }
}
