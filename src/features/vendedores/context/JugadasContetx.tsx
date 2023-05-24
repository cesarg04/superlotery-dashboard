import { createContext, useReducer } from "react"
import { Jugada } from "../interfaces"
import { JugadasReducer } from "./JugadasReducer"

type Contextprops = {
    addJugadas: (jugada: Jugada) => void
    jugadasState: JugadasStateProps
    deleteJugadas: (index: number) => void
    addPaleoSuper: (jugada: Jugada, combId: number) => void
    addCurrentJugadaId: (id: string) => void;
}

export interface JugadasStateProps {
    jugadas: Jugada[] | undefined
    idJugadEnCurso: string
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const stateJugadas: JugadasStateProps = {
    jugadas: [],
    idJugadEnCurso: ''

}


export const JugadasCtx = createContext({} as Contextprops)

export const JugadasProvider: React.FC<Props> = ({ children }) => {

    const [jugadasState, dispatch] = useReducer(JugadasReducer, stateJugadas)

    const addJugadas = (jugada: Jugada) => {
        dispatch({ type: 'addJugada', payload: jugada })
    }


    const deleteJugadas = (index: number) => {
        dispatch({type: 'deleteJugada', payload: index})
    }

    const addPaleoSuper = ( judada: Jugada, combId: number ) => {
        
        console.log({
            judada, combId
        })

        dispatch({ type:"addtypeJug", payload:{ jugada: judada, combId: combId }  })
    }


    const addCurrentJugadaId = (id: string) => {
        dispatch({ type: 'addCurrentId', payload: id })
    }

    return (
        <JugadasCtx.Provider
            value={{
                jugadasState,
                addJugadas,
                deleteJugadas,
                addPaleoSuper,
                addCurrentJugadaId
            }} >
            {
                children
            }
        </JugadasCtx.Provider>
    )

}
