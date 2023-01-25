import { useQuery } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { Zonas } from "../interfaces"

export const getAllZonas = async( token: string ) => {

    const { baseURL } = baseApI(token)
    const { data } = await baseURL.get<Zonas[]>('zonas')
    return data
}


export const useZonas = ( token: string ) => {

    const zonasQuery = useQuery(
        ['zonas'],
        () => getAllZonas(token)
    )

    return{
        zonasQuery
    }

}