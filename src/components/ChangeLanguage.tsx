import { Dropdown } from "flowbite-react"
import { useTranslation } from "react-i18next"


export const ChangeLanguage = () => {

    const { t, i18n } = useTranslation('global')

    const nameLanguage = (key: string):string => {
        switch (key) {
            case 'en':
                return 'English'

            case 'es':

                return 'Español'

            case 'fr':
                return 'Francais'

            default:
                return 'Idioma'
        }
    }

    return (
        <Dropdown
            label={ nameLanguage(i18n.language) }
            // inline={true}
            color={'default'}
            size={'sm'}
            className="dark:text-white"
        >
            <Dropdown.Item
            onClick={() => i18n.changeLanguage('en')} >
                English
            </Dropdown.Item>
            <Dropdown.Item
            onClick={() => i18n.changeLanguage('es')} >
                Español
            </Dropdown.Item>
            <Dropdown.Item
            onClick={ () => i18n.changeLanguage('fr') } >
                Francais
            </Dropdown.Item>
        </Dropdown>
    )
}
