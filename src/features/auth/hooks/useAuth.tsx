import { useMutation, useQuery } from "@tanstack/react-query";
import { baseApi } from "../../../api/apiSettings"
import { Inputs, LoginSuperadmin, User } from "../interfaces"
import { sleep } from "../../../helpers/sleep";


export const auth = async(authData: Inputs):Promise<LoginSuperadmin> => {
    const { data } = await baseApi.post('login', {...authData})
    console.log(data)
    return data;
}


export const refreshUserLogged = async( token: string ) => {

    const { data } = await baseApi.get<User>('auth/user', {
        headers: {Authorization: `Bearer ${token}`}
    })
    return data;
}

export const onRefresh = (token: string) => {

    const me = useQuery(
        ['me'],
        () => refreshUserLogged(token)
    )

    return {
        me
    }

}


export const useAuth = () => {
    return useMutation(auth)

}
