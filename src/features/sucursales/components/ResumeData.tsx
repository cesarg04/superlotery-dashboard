import { FaMoneyBill } from "react-icons/fa"
import { CardChildrenResumen } from "./CardChildrenResume"
import { BsAwardFill, BsHeptagonHalf } from "react-icons/bs"
import { MdAccountBalance } from "react-icons/md"
import { useTranslation } from "react-i18next"

export const ResumenDia = () => {

    const { t, i18n } = useTranslation('global')


    return (
        <div className="w-6/12 border rounded-md px-4 py-5" >

            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-400 py-4" >Resumen del dia</h2>

            <div className="w-full grid grid-cols-2 grid-rows-2 gap-4" >
                <CardChildrenResumen 
                Icon={FaMoneyBill}
                message={t('vendedor.resume_day.sales')}
                color="bg-blue-500"
                mount="2,0000" />
                
                <CardChildrenResumen 
                Icon={BsAwardFill}
                message={t('vendedor.resume_day.awards')}
                color="bg-green-500"
                mount="3,0000" />

                <CardChildrenResumen
                Icon={BsHeptagonHalf}
                message={t('vendedor.resume_day.comision')}
                color="bg-purple-500"
                mount="0"
                />

                <CardChildrenResumen
                Icon={MdAccountBalance}
                message={t('vendedor.resume_day.balance')}
                color="bg-yellow-300"
                mount="25,000"
                />

            </div>

        </div>
    )
}
