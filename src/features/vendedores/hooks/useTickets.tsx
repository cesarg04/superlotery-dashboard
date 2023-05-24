import { useMutation } from "@tanstack/react-query"
import { useAuthContext } from "../../../hooks/useContext"
import { useJugadasContext } from "./useJugadasContext"
import { baseApI } from "../../../api/apiSettings";
import { TicketsInputs } from "../interfaces";
import { toast } from "react-hot-toast";



export const useTickets = () => {

    const { stateAuth } = useAuthContext()
    const { jugadasState } = useJugadasContext()
    const { baseURL } = baseApI(stateAuth.token)

    const crearTicket = useMutation({
        mutationFn: (data: TicketsInputs) => {
            return baseURL.post('tickets', data)
        },
        onSuccess: (data, context) => {
            toast.success('Jugada creada con exito', {
                position: 'top-right',
                duration: 4000
            })
            console.log(data)
        },
        onError: ( error, context ) => {
            toast.error('Ocurrio un error al realizar la jugada, verifique los campos e intente de nuevo')
        }
    })

    return {
        crearTicket
    }
}
