import { useQuery } from "@tanstack/react-query";
import { baseApI } from "../../../api/apiSettings"
import { Vendedores } from "../interfaces";

export const getVendedores = async( token: string ) => {
    const { baseURL } = baseApI(token);
    const { data } = await baseURL.get<Vendedores[]>('vendedores');
    return data;
}

export const useVendedores = ( token:  string ) => {

    const vendedoresQuery = useQuery(
        ['vendedores'],
        () => getVendedores( token )
    )
    
    return { 
        vendedoresQuery
    }

}



