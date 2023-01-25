import { useState }  from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoteriesInputs } from '../interfaces';

export const useAddEditLoteries = () => {

    const [statusLotery, setStatusLotery] = useState(true);
    const [aperturaSecuencial, setAperturaSecuencial] = useState(true);
    const [cierreSecuencuial, setCierreSecuencuial] = useState(true);

    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<LoteriesInputs>();


    const onSubmit: SubmitHandler<LoteriesInputs> = async (data) => {

        alert(JSON.stringify(data))

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
        setCierreSecuencuial
    }
}
