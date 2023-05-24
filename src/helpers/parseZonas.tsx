import { Combinaciones, Loterias, Sucursales, Zonas } from "../features/superadmin/interfaces";


export const getNameZonaById = ( id: number, zona: Zonas[] ): string | undefined => {
    const object = zona.find(o => o.id === id);
    return object ? object.nombre : undefined;
}

export const getNameSucursalById = ( id: number, sucursal: Sucursales[] ): string | undefined => {
    const object = sucursal.find(o => o.id === id);
    return object ? object.nombre : undefined;
}


export const getNameCombinacionById =( id: number, combinacion: Combinaciones[] ): string | undefined => {
    const object = combinacion.find(o => +o.id === +id)
    return object ? object.nombre : undefined
}

export const getNameLoteryById =( id: number, loteria: Loterias[] ): string | undefined => {
    const object = loteria.find(o => +o.id === +id)
    return object ? object.nombre : undefined
}
    