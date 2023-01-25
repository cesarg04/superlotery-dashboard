import { useQuery } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { Sucursales } from "../interfaces"


export const getSucursales = async(token: string):Promise<Sucursales[]> => {

    const { baseURL } = baseApI(token)
    const { data } = await baseURL.get<Sucursales[]>('sucursales')
    return data

}

export const useSucursales = (token: string) => {

    const getAllSucursales = useQuery(
        ['sucursales'],
        () => getSucursales( token )
    )

    return {
        getAllSucursales
    }

}

