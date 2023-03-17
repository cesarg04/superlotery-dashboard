import { Jugada } from "../interfaces"
import { JugadasContextPorps } from "./JugadasContetx"

type Actions = 
    { type: 'addJugada', payload: Jugada[] }



export const JugadasReducer = (state: JugadasContextPorps, action: Actions):JugadasContextPorps => {
    
    switch (action.type) {
        case 'addJugada':
            return {
                ...state,
                jugadas: action.payload
                
            }
            
    
        default:
            return {
                ...state
            }
    }


}
