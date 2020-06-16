import { message } from './string';
describe('Pruebas de String', () => {
    it('Debe de regresar un string', () => {
        const response = message('Fernando');

        expect(typeof response).toBe('string');
    });

    it('Debe de retornar un saludo con el nombre enviado', () => {
        const name = 'Jesus';
        const response = message(name);

        expect(response).toContain(name);
    });
});
