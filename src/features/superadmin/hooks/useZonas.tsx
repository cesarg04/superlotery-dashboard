import { useQuery } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { Zonas } from "../interfaces"

export const getAllZonas = async (token: string) => {

    const { baseURL } = baseApI(token)
    const { data } = await baseURL.get<Zonas[]>('zonas')
    return data
}


export const getZonaForSuc = async (token: string, id?: number) => {
    const { baseURL } = baseApI(token);
    const { data } = await baseURL.get<Zonas[]>(`zonas/sucursales/${id}`)
    return data;
}



export const useZonas = (token: string, idSucuresal?: number) => {

    const zonasQuery = useQuery(
        ['zonas'],
        () => getAllZonas(token)
    )


    const zonasForSucID = useQuery(
        ['zonas_sucursal_id', idSucuresal],
        () => getZonaForSuc(token, idSucuresal)
    )

    return {
        zonasQuery,
        zonasForSucID
    }

}


