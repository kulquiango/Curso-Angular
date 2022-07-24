import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectsDataService } from '../service/proyects-data.service';

@Component({
  selector: 'app-informaction',
  templateUrl: './informaction.component.html',
  styleUrls: ['./informaction.component.css'],
})
export class InformactionComponent implements OnInit {
  parameter: string = '';
  proyectData: any = {};

  constructor(
    private activedRoter: ActivatedRoute,
    private location: Location,
    private proyectsDataService: ProyectsDataService
  ) {
    let name = '';
    activedRoter.params.subscribe(({ name: nameProyect }) => {
      name = nameProyect;
    });
    this.parameter = decodeURI(name);
  }

  ngOnInit(): void {
    this.proyectData = this.proyectsDataService.getProyects(this.parameter);
  }

  goProyects() {
    this.location.back();
  }
}
