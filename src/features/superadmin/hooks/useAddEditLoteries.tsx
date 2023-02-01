import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import {  LoteriasInp, LoteriesInputs } from '../interfaces';
import { useMutation } from '@tanstack/react-query';
import { baseApI } from '../../../api/apiSettings';
import { useAuthContext } from '../../../hooks/useContext';
import { useLoterias } from './useLoterias';
import { useIsMutating } from "@tanstack/react-query";
import { toast } from 'react-hot-toast';

interface AguantePremios {
    nombre:         string,
    loteria_id:     number;
    monto_primera?:  number; 
    monto_segunda?:  number; 
    monto_tercera?:  number; 

}

export const useAddEditLoteries = () => {
    const { stateAuth } = useAuthContext()
    const { baseURL } = baseApI(stateAuth.token)
    const [statusLotery, setStatusLotery] = useState(true);
    const [aperturaSecuencial, setAperturaSecuencial] = useState(true);
    const [cierreSecuencuial, setCierreSecuencuial] = useState(true);
    const { getAllLoteries } = useLoterias(stateAuth.token!)
    const indicadorCarga = useIsMutating();

    const { register, handleSubmit, watch, formState: { errors }, setError, reset } = useForm<LoteriasInp>();

    
    const quinielas = useMutation({
        mutationFn: (quiniela: AguantePremios) => {
            return baseURL.post('combinaciones', quiniela)
        },
        onSuccess: () => {
            reset()
        }
    })

    const agregarLoterias = useMutation({
        mutationFn: ({loteria}: LoteriasInp) => {
            return baseURL.post('loterias', loteria)
        },
        onSuccess: (data, variables, context) => {

            const { id } = data.data

            let arr: AguantePremios[] = [
                {
                    nombre: 'quinielas',
                    loteria_id: id,
                    monto_primera: variables.combinaciones.quiniela.primera,
                    monto_segunda: variables.combinaciones.quiniela.segunda,
                    monto_tercera: variables.combinaciones.quiniela.tercera
                },
                {
                    nombre: 'pale',
                    loteria_id: id,
                    monto_primera: variables.combinaciones.pale.primera,
                    monto_segunda: variables.combinaciones.pale.segunda,

                },
                {
                    nombre: 'tripleta',
                    loteria_id: id,
                    monto_primera: variables.combinaciones.pale.primera,
                    monto_segunda: variables.combinaciones.pale.segunda,
                },
                {
                    nombre: 'superPale',
                    loteria_id: id,
                    monto_primera: variables.combinaciones.superpale.primera,
                }

            ]

            arr.forEach( (lol) => {
                quinielas.mutate(lol)
                console.log(lol)
            } )

            toast.success('Loteria creada con exito', {
                duration: 4000,
                position: 'top-right'
            })
            getAllLoteries.refetch()

        }
    })



    const onSubmit: SubmitHandler<LoteriasInp> = async (data) => {

        if (aperturaSecuencial) {
            data.loteria.apertura_martes = data.loteria.apertura_lunes
            data.loteria.apertura_miercoles = data.loteria.apertura_lunes
            data.loteria.apertura_jueves = data.loteria.apertura_lunes
            data.loteria.apertura_viernes = data.loteria.apertura_lunes
            data.loteria.apertura_sabado = data.loteria.apertura_lunes
            data.loteria.apertura_domingo = data.loteria.apertura_lunes
        }

        if (cierreSecuencuial) {
            data.loteria.cierre_martes = data.loteria.cierre_lunes
            data.loteria.cierre_miercoles = data.loteria.cierre_lunes
            data.loteria.cierre_jueves = data.loteria.cierre_lunes
            data.loteria.cierre_viernes = data.loteria.cierre_lunes
            data.loteria.cierre_sabado = data.loteria.cierre_lunes
            data.loteria.cierre_domingo = data.loteria.cierre_lunes

        }

        agregarLoterias.mutate(data)

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
        indicadorCarga
    }
}
