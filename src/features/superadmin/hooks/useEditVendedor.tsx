import { SubmitHandler, useForm } from "react-hook-form"
import { useAuthContext } from "../../../hooks/useContext"
import { useZonas } from "./useZonas"
import { VendedoresInpus, VendedoresInpusUpdate } from "../interfaces"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { toast } from "react-hot-toast"

export const useEditVendedor = (id_vendor?: number) => {

    const { stateAuth } = useAuthContext();
    const { baseURL } = baseApI(stateAuth.token)
    const { zonasQuery } = useZonas(stateAuth.token!);
    const [isEdit, setIsEdit] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<VendedoresInpusUpdate>()

    const updateVendorMutate = useMutation({
        mutationFn: ( data: VendedoresInpusUpdate ) => {
            return baseURL.put('vendedores', data)
        },
        onSuccess: () => {
            toast.success('Vendedor actaulizado con exito', {
                duration: 4000,
                position: 'top-right'
            })
        },
        onError: () => {
            toast.error('Error al modificar el vendedor, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })
        }
    })


    const onSubmit: SubmitHandler<VendedoresInpusUpdate> = (data) => {
        updateVendorMutate.mutate({
            ...data,
            id: id_vendor
        })
    }

    return {
        register, 
        handleSubmit,
        errors,
        zonasQuery,
        onSubmit,
        isEdit,
        setIsEdit
    }


}
