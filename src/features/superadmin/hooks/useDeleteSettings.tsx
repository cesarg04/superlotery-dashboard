import { useMutation } from "@tanstack/react-query"
import { useAuthContext } from "../../../hooks/useContext"
import { baseApI } from "../../../api/apiSettings"
import { toast } from "react-hot-toast"
import { client } from "../../../main"


export const useDeleteSettings = ( name: string ) => {

    const { stateAuth } = useAuthContext()
    const { baseURL } = baseApI(stateAuth.token)
    

    const mutation = useMutation({

        mutationFn: ( id: number ) => {
            return baseURL.delete(`${name}/${ id }`,   )
        },
        onSuccess: (data, variables) => {
            toast.success('Eliminado con exito', {
                duration: 4000,
                position: 'top-right'
            })
        }

    })

    const onDelete = (id: number) => {
        mutation.mutate(id)
    }

    return {
        mutation,
        onDelete

    }
}

