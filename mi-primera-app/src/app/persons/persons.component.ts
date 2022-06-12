import { Component } from '@angular/core';

@Component({
  // Nombre del component
  selector: 'app-persons',
  //ruta de archivo html
  templateUrl: './persons.component.html',
})
export class PersonsComponent {
  disable: boolean = false;
  mensaje: string = 'No se agregado ninguna persona';
  titulo: string = 'Silvestre';
  isActive: boolean = false;

  AgregarPersona(): void {
    this.mensaje = 'Persona Agregada';
    this.disable = true;
    this.isActive = true;
  }

  // evento con funcion
  // modificarTitulo(event: Event): void {
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }
}
