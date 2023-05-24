import { SubmitHandler, useForm } from "react-hook-form"
import { Jugada } from "../interfaces"
import { useLoterias } from "../../superadmin/hooks/useLoterias"
import { useCombinaciones } from "../../superadmin/hooks/useCombinaciones"
import { useAuthContext } from "../../../hooks/useContext"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useJugadasContext } from "./useJugadasContext"
import { v4 as uuid } from 'uuid'


const convertirNumerosString = (numerosString: string) => {
    
    const numerosArray = [];
    for (let i = 0; i < numerosString.length; i += 2) {
        numerosArray.push({
           numero: Number(numerosString.slice(i, i + 2))
        
        });
    }
    
    return numerosArray;
}


export const useJugadas = () => {

    const { t, i18n } = useTranslation('global');
    const { stateAuth } = useAuthContext();
    const { getAllLoteries } = useLoterias(stateAuth.token!);
    const { getAllCombinaciones } = useCombinaciones(stateAuth.token!);
    const { register, formState: { errors }, reset, setError, watch, handleSubmit } = useForm<Jugada>();
    const [jugadas, setJugadas] = useState<string>();
    const { addJugadas, addCurrentJugadaId } = useJugadasContext();
    const [seleccionLoteria, setSeleccionLoteria] = useState(false)
    const [visbleSelectMode, setVisbleSelectMode] = useState<boolean>(false)
    



    const onSubmit: SubmitHandler<Jugada> = (data) => {
        // alert(convertirNumerosString(data.numeros));
        data.id = uuid()
        addCurrentJugadaId(data.id)
        // console.log(data.id)
        if (jugadas?.length! % 2 === 1 || !jugadas?.length || jugadas.length > 6) {
            toast.error(errors.numeros?.message || 'La jugada es incorrecta, verifique o intente de nuevo', {
                position: 'top-right',
                duration: 2000
            })
            return;
        }

        switch (jugadas.length) {
            case 2:

                const combinationId = getAllCombinaciones.data?.find(comb => comb.nombre === 'Quiniela');

                if (!combinationId) {
                    toast.error(errors.numeros?.message || 'La jugada es incorrecta, verifique o intente de nuevo', {
                        position: 'top-right',
                        duration: 2000
                    })

                    return;
                }
                data.combinacion_id = combinationId.id

                break;

            case 4:
                setVisbleSelectMode(!visbleSelectMode)

                break;

            case 6:
                const combinationTripleta = getAllCombinaciones.data?.find(comb => comb.nombre === 'Tripleta');

                if (!combinationTripleta) {
                    toast.error(errors.numeros?.message || 'La jugada es incorrecta, verifique o intente de nuevo', {
                        position: 'top-right',
                        duration: 2000
                    })

                    return;
                }

                data.combinacion_id = combinationTripleta?.id

                break

            default:
                break;
        }

        data.loteria_id = +data.loteria_id
        data.monto = +data.monto

        const jugadasParsed = convertirNumerosString(jugadas!);

        data.numeros = jugadasParsed;
        addJugadas(data)

        reset()

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
        onChangeJugadas,
        visbleSelectMode,
        setVisbleSelectMode,
        seleccionLoteria,
        setSeleccionLoteria,
    }
}
