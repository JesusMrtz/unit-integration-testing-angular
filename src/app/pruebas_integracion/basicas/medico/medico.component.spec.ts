import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers: [
                MedicoService
            ],
            imports: [
                HttpClientModule
            ]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente correctamente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {
        const name = 'Jesús';
        const messageName = component.sayHello(name);

        expect(messageName).toContain(name);
    });
});
