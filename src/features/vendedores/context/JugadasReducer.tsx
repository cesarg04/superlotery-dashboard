import { Jugada } from "../interfaces"
import { JugadasStateProps } from "./JugadasContetx"

type Actions = 
        { type: 'addJugada', payload: Jugada }
    |   { type: 'deleteJugada', payload: number }
    |   { type: 'addCurrentId', payload: string }
    |   { type: 'addtypeJug', payload: { jugada: Jugada, combId: number } }

export const JugadasReducer = (state: JugadasStateProps, action: Actions):JugadasStateProps => {
    
    switch (action.type) {
        case 'addJugada':
            state.jugadas?.push(action.payload)
            return {
                ...state
            }
        
        case 'deleteJugada':
            state.jugadas?.splice(action.payload, 1)
            return {
                ...state
            }
        
        case 'addtypeJug': 
            
            const jugada = state.jugadas?.findIndex( jug => jug.id === action.payload.jugada.id )

            if (jugada !== undefined) {
                state.jugadas![jugada].combinacion_id = action.payload.combId              
            }

            return {
                ...state
            }
    
        case 'addCurrentId':
            state.idJugadEnCurso = action.payload
            return{
                ...state
            }

        default:
            return {
                ...state
            }
    }


}
