import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { baseApI } from "../../../api/apiSettings";
import { useAuthContext } from "../../../hooks/useContext";
import { Sucursalinputs } from "../interfaces";
import { sleep } from '../../../helpers/sleep';
import { toast } from 'react-hot-toast';
import { useSucursales } from './useSucursales';
import { useMutation } from '@tanstack/react-query';


export const useAddEditSucursal = () => {

    const { stateAuth } = useAuthContext();
    const { baseURL } = baseApI(stateAuth.token)
    const { getAllSucursales } = useSucursales(stateAuth.token!)
    const { register, handleSubmit, watch, formState: { errors }, setError, reset } = useForm<Sucursalinputs>();


    const mutation = useMutation({
        mutationFn: (newTodo: Sucursalinputs) => {
            return baseURL.post('sucursales', newTodo);
        },
        onSuccess: ( data ) => {
            reset()
            toast.success('Sucursal creada con exito', {
                duration: 4000,
                position: 'top-right'
            })
        },
        onError: ( error ) => {
            toast.error('Error al crear la sucursal, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })

        }
    })


    const editMutation = useMutation({
        mutationFn: (newTodo: Sucursalinputs) => {
            return baseURL.put('sucursales', newTodo);
        },
        onSuccess: ( data ) => {
            reset()
            toast.success('Sucursal actualizada con exito', {
                duration: 4000,
                position: 'top-right'
            })
        },
        onError: ( error ) => {
            toast.error('Error al actualizar la sucursal, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })

        }
    })


    const onSubmit: SubmitHandler<Sucursalinputs> = async (sucursalesData) => {

        mutation.mutate(sucursalesData)
        
    }

    const onEdit: SubmitHandler<Sucursalinputs> = (sucursalesData) => {

        editMutation.mutate(sucursalesData)
    } 

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return {
        register,
        handleSubmit,
        watch,
        setError,
        errors,
        onSubmit,
        emailRegex,
        mutation,
        editMutation,
        onEdit
    }
}
