import { SubmitHandler, useForm } from "react-hook-form"
import { CombinacionesInput } from "../interfaces"
import { useMutation } from "@tanstack/react-query"
import { useAuthContext } from "../../../hooks/useContext"
import { baseApI } from "../../../api/apiSettings"
import { toast } from "react-hot-toast"
import { useCombinaciones } from "./useCombinaciones"


export const useCreateCombinaciones = () => {

    const { stateAuth } = useAuthContext()
    const { baseURL } = baseApI(stateAuth.token)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CombinacionesInput>()
    const { getAllCombinaciones } = useCombinaciones(stateAuth.token!)

    const submitMutation = useMutation({
        mutationFn: (data: CombinacionesInput) => {
            return baseURL.post('combinaciones', data)
        },
        onSuccess: () => {
            reset()
            getAllCombinaciones.refetch()
            toast.success('Combinacion creada con exito', {
                duration: 4000,
                position: 'top-right'
            })
        },
        onError: () => {
            toast.error('Error al crear la combinacion, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })
        }
    })


    const onSubmit:SubmitHandler<CombinacionesInput> = (data) => {
        submitMutation.mutate(data)

    }

    return {
        register, 
        handleSubmit,
        onSubmit,
        submitMutation
    }
}
