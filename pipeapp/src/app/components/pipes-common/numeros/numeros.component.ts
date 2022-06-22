import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  califications: number=7.914564846532132481
  porcentaje :number = 0.36
  saldo:number = 12000
  constructor() { }

  ngOnInit(): void {
  }

}
