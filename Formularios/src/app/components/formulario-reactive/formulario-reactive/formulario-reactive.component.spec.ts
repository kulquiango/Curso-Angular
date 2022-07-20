import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactiveComponent } from './formulario-reactive.component';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;
  let fixture: ComponentFixture<FormularioReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
