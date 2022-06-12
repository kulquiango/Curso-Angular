import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnRestaComponent } from '../btn-resta/btn-resta.component';
import { BtnSumaComponent } from '../btn-suma/btn-suma.component';
import { ContadorComponent } from './contador.component';

describe("ContadorComponent Unit", () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent],
    }).compileComponents();
  });

  //verificar que si se este creando el componente
  it("Se debe crear el componente ContadorComponent", () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    expect(fixture.componentInstance).toBeTruthy()
  })

  //Prueba Unitaria
  it("Debe Crear el texto contado: 0", () => {
    const fixture = TestBed.createComponent(ContadorComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement
    expect(compiled.querySelector("h1")?.textContent).toEqual('Contador: 0')
  })


  it("valor inicial del contador es 0", () => {
    const testContador = new ContadorComponent()
    expect(testContador.contador1).toBe(0)
  })



})

//prueba de intergracion, video 34
describe("Intregation testing", () => {

  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContadorComponent, BtnSumaComponent, BtnRestaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it("Evento Click suma", () => {
    const compiled: HTMLElement = fixture.nativeElement
    // ( ! )elemento forzoso
    const contadorValue = compiled.querySelector('h1')!;
    const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector('#add')
    btnAdd.click();
    fixture.detectChanges();
    expect(contadorValue?.textContent).toEqual("Contador: 1")
  })

  it('Evento click resta', () => {
    const compiled: HTMLElement = fixture.nativeElement
    const contadorValue = compiled.querySelector('h1')
    const btnDis: HTMLElement = fixture.debugElement.nativeElement.querySelector('#dis')
    btnDis.click();
    fixture.detectChanges()
    expect(contadorValue?.textContent).toEqual("Contador: -1")


  })


})
