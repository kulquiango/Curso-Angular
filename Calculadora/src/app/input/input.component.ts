import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  operadorA: number = 0;
  operadorB: number = 0;
  resultado: number = 0;

  sumar(): number {
    this.resultado = this.operadorA + this.operadorB;
    return this.resultado;
  }
}
