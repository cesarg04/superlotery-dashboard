import { useContext } from "react"
import { JugadasCtx } from "../context/JugadasContetx"


export const useJugadasContext = () => {
    const useJugadasContext = useContext(JugadasCtx)
    return { 
        ...useJugadasContext
    }
}
