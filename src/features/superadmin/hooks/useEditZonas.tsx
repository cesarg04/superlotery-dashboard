import { SubmitHandler, useForm } from "react-hook-form";
import { baseApI } from "../../../api/apiSettings";
import { useAuthContext } from "../../../hooks/useContext";
import { useSucursales } from "./useSucursales";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useZonas } from "./useZonas";

interface ZonasInpustEdit {
    id:                 number;
    nombre:             string;
    pais:               string;
    provincia:          string;
    tipo_moneda:        string;
    valor_moneda_pesos: string;
    limites:            string;
    estado_limite:      string;
    sucursal_id:        string;
}


export const useEditZonas = (id: number, suc_id: string) => {
    const { stateAuth } = useAuthContext();
    const { baseURL } = baseApI(stateAuth.token);
    const { getAllSucursales } = useSucursales(stateAuth.token!);
    const { zonasQuery } = useZonas(stateAuth.token!)
    const { register, formState: { errors }, handleSubmit } = useForm<ZonasInpustEdit>();

    const editZonasMutation = useMutation({
        mutationFn: (data: ZonasInpustEdit) => {
            return baseURL.put('zonas', data)
        },
        onSuccess: () => {
            toast.success('Zona actualizada satisfactoriamente', {
                duration: 4000,
                position: 'top-right'
            })
            zonasQuery.refetch()
        },
        onError: () => {
            toast.error('Error al actualizar la zona', {
                duration: 4000,
                position: 'top-right'
            })
        }
    })


    const onSubmit:SubmitHandler<ZonasInpustEdit> = ( data ) => {
        console.log(data)
        editZonasMutation.mutate({
            ...data,
            id,
            sucursal_id: (!data.sucursal_id) ? suc_id : data.sucursal_id
        })

    }


    return {
        register,
        errors,
        handleSubmit,
        getAllSucursales,
        onSubmit,
        editZonasMutation
    }
}
