import { useTranslation } from "react-i18next"
import { HiOutlineTicket, HiStatusOnline } from "react-icons/hi"
import { MdOutlinePendingActions } from "react-icons/md"
import { RiErrorWarningLine } from 'react-icons/ri'
import { ImHappy } from 'react-icons/im'

export const HomeDataShow = () => {
    const { t, i18n } = useTranslation('global')
    return (
        <div className="w-full rounded-md flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-stretch">

            <div className="box-home-vend ">
                <h2>{t('vendedor.home.connected')}</h2>
                <h2 className='text-secondary-home' >0</h2>
                <HiStatusOnline className='text-green-400 text-2xl' />
            </div>

            <div className="box-home-vend" >
                <h2>{t('vendedor.home.tickets')}</h2>
                <h2 className='text-secondary-home'>20</h2>
                <HiOutlineTicket className='text-blue-400 text-2xl' />
            </div>

            <div className="box-home-vend" >
                <h2>{t('vendedor.home.pending')}</h2>
                <h2 className='text-secondary-home'>30</h2>
                <MdOutlinePendingActions className='text-yellow-300 text-2xl' />
            </div>

            <div className="box-home-vend" >
                <h2>{t('vendedor.home.nulls')}</h2>
                <h2 className='text-secondary-home'>30</h2>
                <RiErrorWarningLine className='text-red-400 text-2xl' />
            </div>

            <div className="box-home-vend" >
                <h2>{t('vendedor.home.winners')}</h2>
                <h2 className='text-secondary-home'>30</h2>
                <ImHappy className='text-purple-500 text-2xl' />
            </div>
        </div>
    )
}
