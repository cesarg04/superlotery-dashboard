import { useQuery } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { Rutas } from "../interfaces"


export const getRutas = async(token?: string) => {
    const { baseURL } = baseApI( token )
    const { data } = await baseURL.get<Rutas[]>('rutas')
    return data;
}



export const useRutas = ( token?: string ) => {

    const getAllRutas = useQuery(
        ['rutas'],
        () => getRutas(token)
    )

    return {
        getAllRutas
    }
}

