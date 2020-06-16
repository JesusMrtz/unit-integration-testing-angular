import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostar el titulo en un H3', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges();
        const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(element.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el input el valor del progreso 55', () => {
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const element = input.nativeElement;

            expect(element.value).toBe('55');
        });
    });

    it('Debe de incrementar/decrementar en 5 dando click en un boton', () => {
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click', null);

        expect(component.progreso).toBe(45);

        buttons[1].triggerEventHandler('click', null);

        expect(component.progreso).toBe(50);
    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(element.innerHTML).toContain('45');
    });
});
