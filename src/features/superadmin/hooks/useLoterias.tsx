import { useQuery } from "@tanstack/react-query";
import { baseApI } from "../../../api/apiSettings"
import { Loterias } from "../interfaces"

export const getLoterias = async(token: string) => {    
    const { baseURL } = baseApI(token)
    const { data } = await baseURL.get<Loterias[]>('loterias');
    return data;
}


export const useLoterias = (token: string) => {

    const getAllLoteries = useQuery(
        ['loterias'],
        () => getLoterias( token )
    )
    
    return {
        getAllLoteries
    }

}

