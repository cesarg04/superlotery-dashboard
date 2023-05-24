import { useTranslation } from "react-i18next"
import { useLoterias } from "../../superadmin/hooks/useLoterias";
import { useAuthContext } from "../../../hooks/useContext";
import { Button, Select, TextInput } from "flowbite-react";
import { useCombinaciones } from "../../superadmin/hooks/useCombinaciones";
import { useJugadas } from "../hooks/useJugadas";
import { useEffect } from "react";
import { AddJugadas } from "../components/AddJugadas";
import { TableJugadas } from "../components/TableJugadas";

export const Home = () => {

    const { t, i18n } = useTranslation('global');
    const { stateAuth } = useAuthContext()



    return (
        <div className="w-full h-screen">

            <h1 className="text-2xl text-gray-500 " >{t('sellers.portal_sellers')}</h1>

            <div className="flex flex-col content-center justify-center items-center" >
                <AddJugadas />
                <TableJugadas />
            </div>
        </div>
    )
}
