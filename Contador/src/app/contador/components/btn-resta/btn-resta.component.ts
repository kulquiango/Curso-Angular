import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-resta',
  templateUrl: './btn-resta.component.html',
  styleUrls: ['./btn-resta.component.css']
})
export class BtnRestaComponent {

  @Input()
  contador: number = 0

  @Output()
  onResta: EventEmitter<number> = new EventEmitter();

  resta(): void {
    this.contador--
    this.onResta.emit(this.contador)
  }

}
