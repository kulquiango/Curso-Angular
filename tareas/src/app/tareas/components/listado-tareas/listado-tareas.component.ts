import { Component } from '@angular/core';
import Tareas from '../../interface/Tareas';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  constructor(private tareasService: TareasService) {

  }
  get tareas(): Array<Tareas> {
    return this.tareasService.tareas
  }
  delete(position: number) {
    this.tareasService.deleteTarea(position)
  }

  completar(nombreTarea: String) {
    this.tareasService.completeTarea(nombreTarea);
  }
}
