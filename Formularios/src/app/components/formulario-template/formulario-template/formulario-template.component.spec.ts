import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormularioTemplateComponent } from './formulario-template.component';

describe('FormularioTemplateComponent', () => {
  let component: FormularioTemplateComponent;
  let fixture: ComponentFixture<FormularioTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioTemplateComponent], imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormularioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
