import { SubmitHandler, useForm } from "react-hook-form"
import { ZonasInputs } from "../interfaces"
import { useAuthContext } from "../../../hooks/useContext"
import { useSucursales } from "./useSucursales"
import { useMutation } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { toast } from "react-hot-toast"
import { useZonas } from "./useZonas"

export const useAddEditZonas = () => {

    const { stateAuth } = useAuthContext()
    const { getAllSucursales } = useSucursales( stateAuth.token! )
    const { zonasQuery } = useZonas(stateAuth.token!)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ZonasInputs>()
    const { baseURL } = baseApI(stateAuth.token)

    const mutation = useMutation({
        mutationFn: (newTodo: ZonasInputs) => {
            console.log(newTodo)
          return baseURL.post('zonas', newTodo)
        },
        onSuccess: ( data ) => {
            toast.success('Zona creata con exito',{
                duration: 4000,
                position: 'top-right'
            })
            zonasQuery.refetch()
            reset()
        },
        onError: (error) => {
            toast.error('Error al crear la zona, intente de nuevo',{
                duration: 4000,
                position: 'top-right'
            })
        }
      })

    const onSubmit: SubmitHandler<ZonasInputs> = async (sucursalesData) => {
       mutation.mutate(sucursalesData)
    }



    return {
        register, 
        handleSubmit,
        errors,
        reset,
        onSubmit,
        getAllSucursales,
        mutation
    }


}
