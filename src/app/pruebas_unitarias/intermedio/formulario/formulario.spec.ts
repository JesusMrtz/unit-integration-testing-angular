import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios de login', () => {
    let component: FormularioRegister;

    beforeEach(() => component = new FormularioRegister(new FormBuilder()));

    it('Debe generar un formulario con dos campos, email y password', () => {
        expect(component.form.contains('email')).toBeTruthy(true);
        expect(component.form.contains('password')).toBeTruthy(true);
    });

    it('El email debe de ser obligatorio', () => {
        const control = component.form.get('email');
        control.setValue('jesusmrtztorres@gmail.com');

        expect(control.valid).toBeTruthy();
    });

    it('El email debe de ser un correo valido', () => {
        const control = component.form.get('email');
        control.setValue('jesusmrtztorres@gmail.com');

        expect(control.valid).toBeTruthy();
    });
});
