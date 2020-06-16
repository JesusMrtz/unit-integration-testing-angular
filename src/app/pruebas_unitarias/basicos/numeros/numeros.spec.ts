import { increment } from './numeros';
describe('Pruebas de numeros', () => {
    it('Debe de retornar 100 si el número es mayor  a 100', () => {
        const response = increment(300);
        expect(response).toBe(100);
    });

    it('Debe de retornar el número mas 1 si no es mayor a 100', () => {
        const response = increment(70);
        expect(response).toBe(71);
    });
});
