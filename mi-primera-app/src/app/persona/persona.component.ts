import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  private name: string = 'Kevin';
  private lastName: string = 'Ulquiango';
  private age: number = 22;

  getName(): string {
    return this.name;
  }

  getLastname(): string {
    return this.lastName;
  }

  getAge(): number {
    return this.age;
  }
}
