import { createContext, useReducer } from "react"
import { Jugada } from "../interfaces"
import { JugadasReducer } from "./JugadasReducer"

export interface JugadasContextPorps {
    jugadas: Jugada[] | undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const jugadasState:JugadasContextPorps = {
    jugadas: []
} 

export const JugadasCtx = createContext({} as JugadasContextPorps)

// export const JugadasContetx:React.FC<Props> = ({ children }) => {

//     const [jugadaState, dispatch] = useReducer(JugadasReducer, jugadasState)

//     const addJugadas = (jugada: Jugada[]) => {
//         dispatch({ type: 'addJugada', payload: jugada })
//     }


//     // return(
//     //     <JugadasContetx.Pr>

//     //     </JugadasContetx>
        
//     // )

// }
