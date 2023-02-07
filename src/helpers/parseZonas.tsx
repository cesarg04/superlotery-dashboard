import { Sucursales, Zonas } from "../features/superadmin/interfaces";


export const getNameZonaById = ( id: number, zona: Zonas[] ): string | undefined => {
    const object = zona.find(o => o.id === id);
    return object ? object.nombre : undefined;
}

export const getNameSucursalById = ( id: number, sucursal: Sucursales[] ): string | undefined => {
    const object = sucursal.find(o => o.id === id);
    return object ? object.nombre : undefined;
}
