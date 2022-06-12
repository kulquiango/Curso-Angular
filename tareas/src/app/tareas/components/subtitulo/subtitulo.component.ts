import { Component, OnInit } from '@angular/core';
import Tareas from '../../interface/Tareas';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent {

  constructor(private tareasService: TareasService) { }
  get numeroTareas(): number {
    return this.tareasService.tareas.length
  }

  get tareas(): Array<Tareas> {
    return this.tareasService.tareas
  }
}