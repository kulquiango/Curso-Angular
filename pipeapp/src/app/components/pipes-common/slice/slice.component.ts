import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {

  frutas = ['pera', 'manzana','uva','sandia','mango','frutilla']
  letras='abcdfg'
  constructor() { }

  ngOnInit(): void {
  }

}
