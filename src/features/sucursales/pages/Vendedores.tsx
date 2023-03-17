import { Button } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { VendedoresViewer } from "../components/vendedores/VendedoresViewer"

export const Vendedores = () => {

    const { t, i18n } = useTranslation('global')

    return (
        <div className="w-full">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl dark:text-white">{ t('vendedor.sellers.sellers') }</h1>
                <Button 
                    // onClick={() => setopenAdd(!openAdd)}
                    >
                    Crear Vendedor
                </Button>
            </div>

            <VendedoresViewer/>
            
            
        </div>
    )
}
