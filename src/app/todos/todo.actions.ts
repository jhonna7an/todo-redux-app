import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crear todo',
    props<{texto: string}>()
);

export const toogle = createAction(
    '[TODO] Toogle Todo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{id: number}>()
);

export const toogleAll = createAction(
    '[TODO] ToogleAll Todo',
    props<{completado: boolean}>()
);

export const limpiarCompletados = createAction(
    '[TODO] Limpiar Completados'
);