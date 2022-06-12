import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRestaComponent } from './btn-resta.component';

describe('BtnRestaComponent', () => {
  let component: BtnRestaComponent;
  let fixture: ComponentFixture<BtnRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnRestaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("probar 2 Click contador:-2", () => {
    //VIDEO 33
    let nuevoContador = 0
    component.onResta.subscribe(contador => { nuevoContador = contador })
    component.resta()
    component.resta()
    expect(nuevoContador).toBe(-2)
  })
});
