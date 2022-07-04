import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  img = new Promise((resolve,reject)=>{
    resolve("https://www.anmosugoi.com/wp-content/uploads/2021/10/High-School-DXD-Enthusiasm-Okaken-Racing-Girls-MIN.jpg")
   } )
  
  constructor() { }

  ngOnInit(): void {
  }

}
