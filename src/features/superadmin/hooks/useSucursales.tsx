import { useQuery } from "@tanstack/react-query"
import { baseApi } from "../../../api/apiSettings"
import { Sucursales } from "../interfaces"


export const getSucursales = async():Promise<Sucursales[]> => {

    const { data } = await baseApi.get<Sucursales[]>('sucursales')
    return data

}


export const useSucursales = () => {

    const getAllSucursales = useQuery(
        ['sucursales'],
        () => getSucursales()
    )

    return {
        getAllSucursales
    }

}

