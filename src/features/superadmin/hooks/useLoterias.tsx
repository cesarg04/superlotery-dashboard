import { useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../api/apiSettings"
import { Loterias } from "../interfaces"

export const getLoterias = async() => {
    const { data } = await baseApi.get<Loterias[]>('loterias');
    return data;
}


export const useLoterias = () => {

    const getAllLoteries = useQuery(
        ['loterias'],
        () => getLoterias()
    )
    
    return {
        getAllLoteries
    }

}

