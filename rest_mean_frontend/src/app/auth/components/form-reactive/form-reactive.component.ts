import { Component, Input, NgIterable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  constructor() {}

  ngOnInit(): void {}
}
