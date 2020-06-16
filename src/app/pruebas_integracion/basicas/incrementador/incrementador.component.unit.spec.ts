import { IncrementadorComponent } from './incrementador.component';
import { componentFactoryName } from '@angular/compiler';
describe('Incrementador component unit', () => {
    let component: IncrementadorComponent;

    beforeEach(() => component = new IncrementadorComponent());
    it('No debe de pasar de 100 el progreso', () => {
        component.progreso = 50;
        component.cambiarValor(5);

        expect(component.progreso).toBeLessThan(100);
    });
});
