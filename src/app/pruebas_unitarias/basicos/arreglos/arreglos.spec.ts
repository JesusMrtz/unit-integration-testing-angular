import { getRobots } from './arreglos';
xdescribe('Prueba de arreglos', () => {
    it('Debe de retornar al menos tres robots', () => {
        const response = getRobots();
        expect(response.length).toBeGreaterThanOrEqual(3);
    });

    xit('Debe de existir el elemento kiru y MegaMan', () => {
        const response = getRobots();
        expect(response).toContain('Kiru');
        expect(response).toContain('MegaMan');
    });
});
