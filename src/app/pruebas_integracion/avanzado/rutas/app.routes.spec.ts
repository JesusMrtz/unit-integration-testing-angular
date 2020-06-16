import { ROUTES } from './app.routes';
import { MedicoComponent } from '../../basicas/medico/medico.component';

describe('Rutas principales', () => {
    it('Debe de existir la ruta /medico/:id', () => {
        expect(ROUTES).toContain({
            path: 'medico/:id',
            component: MedicoComponent});
    });
});
