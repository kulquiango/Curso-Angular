import { Component, OnInit } from '@angular/core';
import { ProyectsDataService } from './service/proyects-data.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  constructor(private proyectsDataService: ProyectsDataService) {}

  ngOnInit(): void {}

  get data() {
    return this.proyectsDataService.data;
  }
  getURI(name: string) {
    return encodeURI(name);
  }
}
