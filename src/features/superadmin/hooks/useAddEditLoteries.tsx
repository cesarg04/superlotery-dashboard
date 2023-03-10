import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import {  LoteriesInputs } from '../interfaces';
import { useMutation } from '@tanstack/react-query';
import { baseApI } from '../../../api/apiSettings';
import { useAuthContext } from '../../../hooks/useContext';
import { useLoterias } from './useLoterias';
import { useIsMutating } from "@tanstack/react-query";
import { useCombinaciones } from './useCombinaciones';
import { toast } from 'react-hot-toast';


type CombinaconId = {
    id: number
}

export const useAddEditLoteries = () => {
    const { stateAuth } = useAuthContext()
    const { baseURL } = baseApI(stateAuth.token)
    const [statusLotery, setStatusLotery] = useState(true);
    const [aperturaSecuencial, setAperturaSecuencial] = useState(true);
    const [cierreSecuencuial, setCierreSecuencuial] = useState(true);
    const { getAllLoteries } = useLoterias(stateAuth.token!)
    const { getAllCombinaciones } = useCombinaciones(stateAuth.token!)
    const indicadorCarga = useIsMutating();

    const { register, handleSubmit, watch, formState: { errors }, setError, reset } = useForm<LoteriesInputs>();

    
 
    const agregarLoterias = useMutation({
        mutationFn: (loteria: LoteriesInputs) => {
            return baseURL.post('loterias', loteria)
        },
        onSuccess: (data, variables, context) => {
            toast.success('Loteria creada correctamente', {
                position: 'top-right',
                duration: 4000
            })
            reset()
            getAllLoteries.refetch()
        },
        onError: ( error:any, variables ) => {
            toast.error(`Error: ${ error.response.data.message }`)
        }

    })



    const onSubmit: SubmitHandler<LoteriesInputs> = async (loteria) => {

        // const formData = new FormData()

        // formData.append('logo', loteria.logo[0])

        // const newLotery: LoteriesInputs = {
        //     ...loteria
        // }

        const comb:CombinaconId[] = []

        loteria.combinaciones.forEach(loteria => {
            comb.push({
                id: loteria
            })
        })

        

        if (aperturaSecuencial) {
            loteria.apertura_martes    = loteria.apertura_lunes
            loteria.apertura_miercoles = loteria.apertura_lunes
            loteria.apertura_jueves    = loteria.apertura_lunes
            loteria.apertura_viernes   = loteria.apertura_lunes
            loteria.apertura_sabado    = loteria.apertura_lunes
            loteria.apertura_domingo   = loteria.apertura_lunes
        }

        if (cierreSecuencuial) {
            loteria.cierre_martes      = loteria.cierre_lunes
            loteria.cierre_miercoles   = loteria.cierre_lunes
            loteria.cierre_jueves      = loteria.cierre_lunes
            loteria.cierre_viernes     = loteria.cierre_lunes
            loteria.cierre_sabado      = loteria.cierre_lunes
            loteria.cierre_domingo     = loteria.cierre_lunes

        }

        // agregarLoterias.mutate(loteria)
       agregarLoterias.mutate({...loteria, logo: loteria.logo[0], combinaciones: comb})

    }

    return {
        register,
        handleSubmit,
        watch,
        setError,
        errors,
        onSubmit,
        statusLotery,
        setStatusLotery,
        aperturaSecuencial,
        setAperturaSecuencial,
        cierreSecuencuial,
        setCierreSecuencuial,
        indicadorCarga,
        getAllCombinaciones
    }
}
