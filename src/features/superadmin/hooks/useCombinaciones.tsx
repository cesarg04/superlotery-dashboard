import { useQuery } from "@tanstack/react-query";
import { baseApI } from "../../../api/apiSettings"
import { Combinaciones } from "../interfaces";


export const getCombinaciones = async(token: string) => {
    const { baseURL } = baseApI(token);
    const { data } = await baseURL.get<Combinaciones[]>('combinaciones')
    return data;
}

export const useCombinaciones = (token: string) => {
    
    const getAllCombinaciones = useQuery(
        ['combinaciones', token],
        () => getCombinaciones(token)
    )

    return { 
        getAllCombinaciones
    }
}