import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnSumaComponent } from './btn-suma.component';

describe('BtnSumaComponent', () => {
  let component: BtnSumaComponent;
  let fixture: ComponentFixture<BtnSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnSumaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componete btn-suma creada', () => {
    expect(component).toBeTruthy();
  });

  it("probar 4 clicks contador:4", () => {
    //VIDEO 33
    let nuevoContador = 0
    component.onSuma.subscribe(contador => { nuevoContador = contador })

    component.sumar()
    component.sumar()
    component.sumar()
    component.sumar()
    expect(nuevoContador).toBe(4)
  })



});
