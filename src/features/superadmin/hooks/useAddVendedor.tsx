import { SubmitHandler, useForm } from "react-hook-form"
import { useAuthContext } from "../../../hooks/useContext"
import { useZonas } from "./useZonas"
import { VendedoresInpus } from "../interfaces"
import { useMutation } from "@tanstack/react-query"
import { baseApI } from "../../../api/apiSettings"
import { toast } from "react-hot-toast"
import { useVendedores } from "./useVendedores"
import { useLoterias } from "./useLoterias"

type LoteriaId = {
    id: string
}

export const useAddVendedor = () => {
    const { stateAuth } = useAuthContext()
    const { zonasQuery }= useZonas(stateAuth.token!)
    const { vendedoresQuery } = useVendedores(stateAuth.token!)
    const { getAllLoteries } = useLoterias(stateAuth.token!)
    const { baseURL } = baseApI(stateAuth.token)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<VendedoresInpus>();



    const vendedorMutation = useMutation({
        mutationFn: ( vendedor: VendedoresInpus ) => {
            return baseURL.post('vendedores', vendedor)
        },
        onSuccess: () => {
            toast.success('Vendedor creado con exito', {
                duration: 4000,
                position: 'top-right'
            })
            reset();
            vendedoresQuery.refetch();
        },
        onError: () => {
            toast.error('Error al crear el vendedor, intente de nuevo',{
                duration: 4000,
                position: 'top-right'
            } )
        }
    })

    const onSubmit:SubmitHandler<VendedoresInpus> = (data) => {

        const loteriesArr:LoteriaId[] = []

        data.loterias.forEach(loteria => {
            loteriesArr.push({
                id: loteria
            })
        })

        vendedorMutation.mutate({
            ...data,
            role_id: 4,
            loterias: loteriesArr
        })
    }   

    return {
        zonasQuery,
        register,
        handleSubmit,
        errors,
        onSubmit,
        vendedorMutation,
        getAllLoteries
    }

}
