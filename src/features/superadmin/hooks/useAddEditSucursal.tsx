import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { baseApI } from "../../../api/apiSettings";
import { useAuthContext } from "../../../hooks/useContext";
import { Sucursalinputs } from "../interfaces";
import { toast } from 'react-hot-toast';
import { useSucursales } from './useSucursales';
import { useMutation } from '@tanstack/react-query';


export const useAddEditSucursal = () => {

    const [changePass, setchangePass] = useState(false);
    const { stateAuth } = useAuthContext();
    const { baseURL } = baseApI(stateAuth.token);
    const { getAllSucursales } = useSucursales(stateAuth.token!);
    const { register, handleSubmit, watch, formState: { errors }, setError, reset } = useForm<Sucursalinputs>();


    // Agregar una sucursal
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
            getAllSucursales.refetch()
        },
        onError: ( error ) => {
            toast.error('Error al crear la sucursal, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })

        }
    })


    // Editar campos de una sucursal
    const editMutation = useMutation({
        mutationFn: (newTodo: Sucursalinputs) => {
            console.log(newTodo);
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
            console.log(error);

        }
    })

    // Modificar la Contraseña
    const changePassordMutation = useMutation({
        mutationFn: (data: { passowrd: string, id: number }) => {
            return baseURL.put('users/update/password', data)
        },
        onSuccess: () => {
            toast.success('Contraseña modificada con exito...', {
                duration: 4000,
                position: 'top-right'
            })
        },
        onError: () => {
            toast.error('Error al modificar la contraseña, intente de nuevo', {
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

    const onSubmitPassword: SubmitHandler<{ id: number, passowrd: string }> = (data) => {
        changePassordMutation.mutate(data)
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
        onEdit,
        onSubmitPassword,
        changePass, 
        setchangePass,
        changePassordMutation
    }
}
