import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  img = new Promise((resolve,reject)=>{
    resolve("https://i0.wp.com/aprendeycrea.net/wp-content/uploads/2021/10/Estos-son-los-lenguajes-de-programacion-que-utilizan-Facebook-Google-Windows-Apple-Linux-y-otros.jpg?fit=600%2C339&ssl=1")
   } )
  
  constructor() { }

  ngOnInit(): void {
  }

}
