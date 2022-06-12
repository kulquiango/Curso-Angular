import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasService } from '../../services/tareas.service';

import { SubtituloComponent } from './subtitulo.component';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtituloComponent],
      providers: [TareasService]
    }).compileComponents();

    service = TestBed.inject(TareasService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Deberia renderizar 4 elements', () => {
    const render: HTMLElement = fixture.nativeElement
    const tareas = render.querySelector('#tareasId')?.textContent?.trim()

    expect(tareas).toEqual('Numero de Tareas: 4')
  })

  it('probar disminuir en 1 si elimino un elemento', () => {

    service.deleteTarea(1)
    fixture.detectChanges()
    const render: HTMLElement = fixture.nativeElement
    const tareas = render.querySelector('#tareasId')?.textContent?.trim()

    expect(tareas).toEqual('Numero de Tareas: 3')

  })

  it('Deberia renderizar el mensaje no hay tareas', () => {

    service.deleteTarea(0)
    service.deleteTarea(0)
    service.deleteTarea(0)
    service.deleteTarea(0)
    fixture.detectChanges()
    const render: HTMLElement = fixture.nativeElement
    const tareas = render.querySelector('#NoTareasId')!.textContent!.trim()

    expect(tareas).toEqual('No hay tareas en la lista')

  })
});
