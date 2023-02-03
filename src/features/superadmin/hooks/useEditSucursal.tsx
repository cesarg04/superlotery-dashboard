import { useMutation } from "@tanstack/react-query";
import { Sucursalinputs } from "../interfaces";
import { baseApI } from "../../../api/apiSettings";
import { useAuthContext } from "../../../hooks/useContext";
import { toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSucursales } from "./useSucursales";

export const useEditSucursal = ( idSuc?: number ) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const { stateAuth } = useAuthContext()
    const { baseURL } = baseApI( stateAuth.token )
    const { getAllSucursales } = useSucursales(stateAuth.token!)

    const { register, formState: { errors, defaultValues }, handleSubmit } = useForm<Sucursalinputs>({
        defaultValues: { 
            id:idSuc,
        }
    })

    // Editar campos de una sucursal
    const editMutation = useMutation({
        mutationFn: (newTodo: Sucursalinputs) => {
            return baseURL.put('sucursales', newTodo);
        },
        onSuccess: ( data ) => {
            toast.success('Sucursal actualizada con exito', {
                duration: 4000,
                position: 'top-right'
            })
            getAllSucursales.refetch()
        },
        onError: ( error ) => {
            toast.error('Error al actualizar la sucursal, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            }) 
            console.log(error);

        }
    })

    const onEdit: SubmitHandler<Sucursalinputs> = (sucursalesData) => {
        // Extrayendo el id, en este caso, siempre que se ejecute esta funion, el ID vendra
        editMutation.mutate({
            ...sucursalesData,
            id: idSuc!
        })
    } 


    return {
        register,
        editMutation,
        onEdit,
        errors, 
        handleSubmit,
        emailRegex
    }
}
