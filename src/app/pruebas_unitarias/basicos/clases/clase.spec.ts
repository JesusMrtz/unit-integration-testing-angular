import { Player } from './clase';
describe('Pruebas de clase', () => {
    const player = new Player();

    beforeAll(() => {});
    beforeEach(() => {
        player.hp = 100;
    });
    afterAll(() => {});
    afterEach(() => {});

    it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
        const response = player.recibeDanio(20);

        expect(response).toBe(80);
    });

    it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
        const response = player.recibeDanio(50);

        expect(response).toBe(50);
    });

    it('Debe de retornar 0 de hp si recibe mas de 100 de daño', () => {
        const response = player.recibeDanio(500);

        expect(response).toBe(0);
    });
});
