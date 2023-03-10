import { SubmitHandler, useForm } from "react-hook-form"
import { CombinacionesInput } from "../interfaces"
import { useMutation } from "@tanstack/react-query"
import { useAuthContext } from "../../../hooks/useContext"
import { baseApI } from "../../../api/apiSettings"
import { toast } from "react-hot-toast"

export const useEditCombinaciones = () => {

    const { stateAuth } = useAuthContext();
    const { baseURL } = baseApI(stateAuth.token)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CombinacionesInput>()


    const editCombMutation = useMutation({
        mutationFn: (data: CombinacionesInput) => {

            return baseURL.put('combinaciones', data)
        },
        onSuccess: () => {
            toast.success('Combinacion actualizada con exito', {
                duration: 4000,
                position: 'top-right'
            })
        },
        onError: () => {
            toast.error('Error al actualizar la combinacion, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })
        }
    })


    const onSubmit:SubmitHandler<CombinacionesInput> = (data) => {
        editCombMutation.mutate( data )
    }


    return {
        register, 
        handleSubmit, 
        errors, 
        reset,
        editCombMutation,
        onSubmit
    }
}
