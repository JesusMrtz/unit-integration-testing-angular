import { userLogged } from './boleanos';
describe('Pruebas de booleanos', () => {
    it('Debe de retornar true', () => {
        const response = userLogged();
        expect(response).toBeTrue();
    });
});
