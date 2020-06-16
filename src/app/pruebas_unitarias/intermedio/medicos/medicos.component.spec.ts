import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {from, empty, throwError} from 'rxjs/index';

describe('MedicosComponent', () => {
    let componente: MedicosComponent;
    const servicio = new MedicosService(null);
    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: Debe de cargar los medicos', () => {
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return from(['Medico1', 'Medico2', 'Medico3']);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar al método del servicio para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return empty();
        });

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
        const medico = {id: 1, nombre: 'Juan'};

        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it ('Si falla a adición, la propiedad mensajeError debe ser igual al error del servicio', () => {
        const myError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(myError));

        componente.agregarMedico();
        expect(componente.mensajeError).toBe(myError);
    });

    it('Debe de llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
    });

    it('No debe de llamar al servidor para borrar un médico', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');
    });

});
