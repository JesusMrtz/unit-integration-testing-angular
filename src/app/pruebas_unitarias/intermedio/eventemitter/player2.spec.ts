import { Player2 } from './player2';

describe('Jugador 2 emit', () => {
    let player = new Player2();

    beforeEach(() => player = new Player2());

    it('Debe de emitr un evento cuando recibe daño', () => {
        let newHp = 0;
        player.hpCambia.subscribe((hp) => newHp = hp);
        player.recibeDanio(1000);

        expect(newHp).toBe(0);
    });

    it('Debe de emitr un evento cuando recibe daño y sobrevivir cuando es menos de 100', () => {
        let newHp = 100;
        player.hpCambia.subscribe((hp) => newHp = hp);
        player.recibeDanio(50);

        expect(newHp).toBeGreaterThanOrEqual(1);
    });
});
