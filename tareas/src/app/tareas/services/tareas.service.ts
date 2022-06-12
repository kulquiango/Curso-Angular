import { Injectable, Component } from '@angular/core';
import Tareas from "../interface/Tareas";

@Injectable()
export class TareasService {

    tareas: Array<Tareas> = [
        {
            tarea: 'Barrer',
            completada: false,
        },
        {
            tarea: 'Trapear',
            completada: false,
        }
        , {
            tarea: 'Cocinar',
            completada: false,
        }, {
            tarea: 'Leer',
            completada: false,
        }
    ]

    deleteTarea(position: number): void {
        this.tareas.splice(position, 1);
    }

    completeTarea(nombreTarea: String): void {
        const tarea: Tareas = this.tareas.find(tarea => tarea.tarea === nombreTarea)!;
        console.log(tarea.completada = true);
    }

}