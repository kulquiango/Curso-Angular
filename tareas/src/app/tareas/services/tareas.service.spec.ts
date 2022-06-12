import { TareasService } from "./tareas.service";

describe('TareaService', () => {
    let service: TareasService;

    beforeEach(() => {
        service = new TareasService
    })

    it('Tobe: deberia verificar que el servicio que inicie con 4 tareas', () => { expect(service.tareas.length).toBe(4) })
    it('Delete: deberia borrar la tarea barrer', () => {
        service.deleteTarea(1)
        expect(service.tareas.length).toBe(3)
    })
    it('Delete: probar borrar tarea que no existe', () => {
        service.deleteTarea(1)
        expect(service.tareas.length).toBe(3)
    })

    it('Spy: Deberia llamar la funcion completar una sola vez', () => {
        const spy = jasmine.createSpyObj('TareasService', ['completeTarea'])
        spy.completeTarea()
        expect(spy.completeTarea.calls.count()).toBe(1)
    })
})