import { useForm } from "react-hook-form"
import { useAuthContext } from "../../../hooks/useContext"
import { useZonas } from "./useZonas"
import { VendedoresInpus } from "../interfaces"

export const useAddVendedor = () => {
    const { stateAuth } = useAuthContext()
    const { zonasQuery }= useZonas(stateAuth.token!)

    const {  } = useForm<VendedoresInpus>()

    return {
        zonasQuery
    }

}
