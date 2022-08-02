import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { InputData } from '../../Interface/InputData';
import Swal from 'sweetalert2';

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
  @Input() urlNavigate: string = '';
  @Input() action: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  navigate() {
    switch (this.action) {
      case 'login':
        this.authService.login(this.formGroup.value).subscribe((res) => {
          if (res === true) {
            localStorage.setItem('user', JSON.stringify(this.authService.user));
            this.router.navigateByUrl(this.urlNavigate);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error...',
              text: res,
            });
          }
        });

        break;
      default:
        console.log('Action not supported');
    }
  }
}
