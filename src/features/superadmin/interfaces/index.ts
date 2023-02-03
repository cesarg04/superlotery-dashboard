export interface Sucursales {
    id:         number;
    nombre:     string;
    direccion:  string;
    tipo:       string;
    email:     string;
    created_at: string;
    updated_at: string;
}

export interface SucursaIinputsEditAndDelete{
    id:         number;
    nombre:     string;
    direccion:  string;
    tipo:       string;
    correo:     string;
    contraseña?: string;
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
// Generated by https://quicktype.io

export interface Loterias {
    id:                 number;
    nombre:             string;
    abreviatura:        string;
    estado:             number;
    apertura_lunes:     string | null;
    apertura_martes:    string | null;
    apertura_miercoles: string | null;
    apertura_jueves:    string | null;
    apertura_viernes:   string | null;
    apertura_sabado:    string | null;
    apertura_domingo:   string | null;
    cierre_lunes:       string | null;
    cierre_martes:      string | null;
    cierre_miercoles:   string | null;
    cierre_jueves:      string | null;
    cierre_viernes:     string | null;
    cierre_sabado:      string | null;
    cierre_domingo:     string | null;
    created_at:         string;
    updated_at:         string;
}


export interface LoteriesInputs{
    nombre:             string;
    abreviatura:        string;
    estado:             number;
    apertura_lunes:     string;
    apertura_martes:    string;
    apertura_miercoles: string;
    apertura_jueves:    string;
    apertura_viernes:   string;
    apertura_sabado:    string;
    apertura_domingo:   string;
    cierre_lunes:       string;
    cierre_martes:      string;
    cierre_miercoles:   string;
    cierre_jueves:      string;
    cierre_viernes:     string;
    cierre_sabado:      string;
    cierre_domingo:     string;
}

export interface Sucursalinputs{
    id: number;
    nombre:         string;
    direccion:      string;
    tipo:           string;
    email:          string;
    password?:       string
}

export interface ZonasInputs{
    nombre:             string;
    pais:               string;
    provincia:          string;
    tipo_moneda:        string;
    valor_moneda_pesos: string;
    limites:            string;
    estado_limite:      string;
    sucursal_id:        string; 
    
}

// Generated by https://quicktype.io

export interface Rutas {
    id:           number;
    nombre:       string;
    punto_inicio: null;
    punto_final:  null;
    detalles:     string;
    zona_id:      string;
    created_at:   string;
    updated_at:   string;
}
// Generated by https://quicktype.io

export interface Combinaciones {
    id:            number;
    nombre:        string;
    monto_primera: number;
    monto_segunda: number;
    monto_tercera: number;
    loteria_id:    number;
    created_at:    string;
    updated_at:    string;
}

export interface Quinielas {
    nombre: string;
    primera: number;
    segunda: number;
    tercera: number
    loteria_id: number
}
export interface Pale {
    nombre: string;
    primera: number;
    segunda: number;
    loteria_id: number
}

export interface Tripleta {
    nombre: string;
    primera: number;
    segunda: number;
    loteria_id: number
}

export interface SuperPale {
    nombre: string;
    primera: number;
    loteria_id: number
}

export interface CombinacionesInp{
    quiniela: Quinielas;
    pale: Pale;
    tripleta: Tripleta;
    superpale: SuperPale
}

export interface LoteriasInp{
    loteria:        LoteriesInputs;
    combinaciones:  CombinacionesInp 
}

