import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Personas';
  nombreInput: string = '';
  apellidoInput: string = '';

  personas: Persona[] = [
    new Persona('Kevin', 'Ulquiango'),
    new Persona('Samanta', 'Lopez'),
    new Persona('Kevin', 'Ulquiango'),
    new Persona('Samanta', 'Lopez'),
  ];

  agregarPersona(): void {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
