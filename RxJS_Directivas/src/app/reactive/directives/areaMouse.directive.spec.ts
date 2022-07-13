import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AreaMouseDirective } from './areaMouse.directive';
import { ReactiveContainerComponent } from '../reactive-container/reactive-container.component';

describe('Directive: AreaMouse', () => {
    let component: ReactiveContainerComponent
    let fixture: ComponentFixture<ReactiveContainerComponent>

    beforeEach(async () => {
        fixture = await TestBed.configureTestingModule({
            declarations: [ReactiveContainerComponent, AreaMouseDirective]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactiveContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('Deberia crear un btn con un fondo color azul, tamaño del 400px', () => {
        const element: HTMLDivElement = fixture.debugElement.query(By.directive(AreaMouseDirective)).nativeElement
        expect(element.style.backgroundColor).toEqual('rgb(5, 77, 93)')
        expect(element.style.height).toEqual('400px')
    });

});

