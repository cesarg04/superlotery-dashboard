import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { baseApI } from "../../../api/apiSettings";
import { useAuthContext } from "../../../hooks/useContext";
import { Sucursalinputs } from "../interfaces";
import { sleep } from '../../../helpers/sleep';

export const useAddEditSucursal = () => {

    const { stateAuth } = useAuthContext();
    const { baseURL } = baseApI(stateAuth.token)
    const [isLoading, setIsLoading] = useState(false)


    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<Sucursalinputs>();

    const onSubmit: SubmitHandler<Sucursalinputs> = async (sucursalesData) => {

        setIsLoading(true)
        await sleep(2000)
        await baseURL.post('sucurales', sucursalesData)
        setIsLoading(false)

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
        isLoading
    }
}
