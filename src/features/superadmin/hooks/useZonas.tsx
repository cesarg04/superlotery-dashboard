import { useQuery } from "@tanstack/react-query"
import { baseApi } from "../../../api/apiSettings"
import { Zonas } from "../interfaces"

export const getAllZonas = async() => {

    const { data } = await baseApi.get<Zonas[]>('zonas')

    return data
}


export const useZonas = () => {

    const zonasQuery = useQuery(
        ['zonas'],
        getAllZonas
    )

    return{
        zonasQuery
    }

}