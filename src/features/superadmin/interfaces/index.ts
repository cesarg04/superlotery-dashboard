export interface Sucursales {
    id:         number;
    nombre:     string;
    direccion:  string;
    tipo:       string;
    created_at: string;
    updated_at: string;
}

export interface Zonas {
    id:                 number;
    nombre:             string;
    pais:               string;
    provincia:          string;
    tipo_moneda:        null | string;
    valor_moneda_pesos: null | string;
    limites:            null | string;
    estado_limite:      null | string;
    sucursal_id:        string;
    created_at:         string;
    updated_at:         string;
}
