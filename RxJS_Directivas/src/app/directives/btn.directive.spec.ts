import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { BtnDirective } from './btn.directive';

describe('Directive: Btn', () => {
    let component: AppComponent
    let fixture: ComponentFixture<AppComponent>

    beforeEach(async () => {
        fixture = await TestBed.configureTestingModule({
            declarations: [AppComponent, BtnDirective]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('Deberia crear un btn con un fondo color amarillo, color de texto negro, y un tamaño del 100%', () => {
        const element: HTMLButtonElement = fixture.debugElement.query(By.directive(BtnDirective)).nativeElement
        expect(element.style.backgroundColor).toEqual('rgb(255, 255, 255)')
        expect(element.style.color).toEqual('rgb(252, 3, 215)')
        expect(element.style.width).toEqual('100rem')
    });

});
