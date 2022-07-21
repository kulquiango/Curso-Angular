import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactiveComponent } from './formulario-reactive.component';

describe('FormularioReactiveComponent', () => {
  let component: FormularioReactiveComponent;
  let fixture: ComponentFixture<FormularioReactiveComponent>;

  beforeEach(async () => {
    component = new FormularioReactiveComponent(new FormBuilder())
    await TestBed.configureTestingModule({
      declarations: [
        FormularioReactiveComponent
      ], imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia crear un formulario con tres campos: proyecto, horas y tecnologias', () => {
    const formulario = component.miFormulario
    const proyecto = formulario.get('proyecto')
    const horas = formulario.get('horas')
    const tecnologias = formulario.get('tecnologias')

    expect(proyecto).toBeTruthy();
    expect(horas).toBeTruthy();
    expect(tecnologias).toBeTruthy();
  });

  it('Deberia verificar que el campo proyecto acepte minimo 3 letras', () => {
    const formulario = component.miFormulario
    const proyecto = formulario.get('proyecto')
    proyecto?.setValue("TEST")
    expect(proyecto?.valid).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('Deberia verificar que el campo proyecto acepte maximo 20 letras', () => {
    const formulario = component.miFormulario
    const proyecto = formulario.get('proyecto')
    proyecto?.setValue("123456789112345")
    expect(proyecto?.invalid).toBeFalse();
  });

  it('Deberia verificar que el campo Horas', () => {
    const formulario = component.miFormulario
    const horas = formulario.get('horas')
    horas?.setValue(1)
    expect(horas?.invalid).toBeFalse();
    horas?.setValue(80)
    expect(horas?.invalid).toBeTrue();
    horas?.setValue(0)
    expect(horas?.valid).toBeFalse();
    horas?.setValue(-100)
    expect(horas?.valid).toBeFalse();

    horas?.setValue("51")
    expect(horas?.valid).toBeFalse();
  });

  it('Deberia verificar el agregar Tecnologias', () => {
    const tecnologiasArray = component.tecnologias
    const tecnologiaControl = component.tecnologia
    tecnologiaControl.setValue("Node");
    component.agregarTecnologia()
    tecnologiaControl.setValue("Angular");
    component.agregarTecnologia()
    expect(tecnologiasArray?.value.length).toBe(2);
    expect(tecnologiasArray?.value).toEqual(['Node', 'Angular']);
  });


  it('Deberia verificar el agregar Proyecto', () => {
    const fixture = TestBed.createComponent(FormularioReactiveComponent);
    const app = fixture.componentInstance;
    const formulario = component.miFormulario
    const proyecto = formulario.get('proyecto')
    const horas = formulario.get('horas')
    const tecnologiaControl = component.tecnologia
    const proyectos = component.proyectos

    proyecto?.setValue("Blog")
    horas?.setValue(5)
    tecnologiaControl.setValue("Node");
    component.agregarTecnologia()
    tecnologiaControl.setValue("Angular");
    component.agregarTecnologia()
    component.agregarProyecto()

    expect(component.proyectos.length).toBe(1)
    expect(component.proyectos).toEqual([{ proyecto: 'Blog', horas: 5, tecnologias: ['Node', 'Angular'] }]);


  });
});
