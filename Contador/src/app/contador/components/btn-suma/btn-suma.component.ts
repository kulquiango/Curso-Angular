import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-suma',
  templateUrl: './btn-suma.component.html',
  styleUrls: ['./btn-suma.component.css']
})
export class BtnSumaComponent {

  @Input()
  contador: number = 0;

  @Output()
  onSuma: EventEmitter<number> = new EventEmitter();

  sumar(): void {
    this.contador++
    this.onSuma.emit(this.contador)
  }


}
