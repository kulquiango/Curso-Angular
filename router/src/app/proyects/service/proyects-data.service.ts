import { Injectable } from '@angular/core';
import { proyectos } from 'src/app/shared/data/proyects.data';

@Injectable({
  providedIn: 'root',
})
export class ProyectsDataService {
  private _data = proyectos;

  constructor() {}

  get data() {
    return this._data;
  }

  getProyects(name: string) {
    let proyect = this._data.filter((proyect) => proyect.name === name);
    return proyect[0];
  }
}
