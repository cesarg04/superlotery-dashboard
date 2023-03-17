import { SubmitHandler, useForm } from "react-hook-form"
import { Jugada } from "../interfaces"
import { useLoterias } from "../../superadmin/hooks/useLoterias"
import { useCombinaciones } from "../../superadmin/hooks/useCombinaciones"
import { useAuthContext } from "../../../hooks/useContext"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { toast } from "react-hot-toast"

const convertirNumerosString = (numerosString: string): number[] => {
    const numerosArray = [];
    for (let i = 0; i < numerosString.length; i += 2) {
        numerosArray.push(Number(numerosString.slice(i, i + 2)));
    }
    // console.log(numerosArray)
    return numerosArray;
}


export const useJugadas = () => {
    
    const { t, i18n } = useTranslation('global');
    const { stateAuth } = useAuthContext()
    const { getAllLoteries } = useLoterias(stateAuth.token!)
    const { getAllCombinaciones } = useCombinaciones(stateAuth.token!)
    const { register, formState: { errors }, reset, setError, watch, handleSubmit } = useForm<Jugada>()
    const [jugadas, setJugadas] = useState<string>()


    const onSubmit:SubmitHandler<Jugada> = (data) => {
        // alert(convertirNumerosString(data.numeros));

        if (jugadas?.length! % 2 === 1 || !jugadas?.length || jugadas.length > 6 ) {
            toast.error(errors.numeros?.message || 'La jugada es incorrecta, verifique o intente de nuevo', {
                position: 'top-right',
                duration: 2000
            })
            return;
        }
        
        console.log(jugadas)
        const jugadasParsed = convertirNumerosString(jugadas!);

        alert(jugadasParsed)


    }

    const onChangeJugadas = (value: string) => {
        setJugadas(value)
    }


    return {
        register,
        errors,
        reset,
        setError,
        watch,
        onSubmit,
        handleSubmit,
        getAllLoteries,
        getAllCombinaciones,
        t,
        setJugadas,
        jugadas,
        onChangeJugadas
    }
}
