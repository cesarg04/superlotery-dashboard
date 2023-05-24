import { Dropdown } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { BiDuplicate } from "react-icons/bi"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"


export const DropdownJugadasOptions = () => {

  const { t } = useTranslation('global')

  return (
    <Dropdown label="Opciones" color={'default'}>
        <Dropdown.Item 
            icon={FiEdit}
            // onClick={ () => replaceValues(sucursal) } 
            >
            { t('sellers.edit') }
        </Dropdown.Item>
        <Dropdown.Item 
            icon={BiDuplicate}
            // onClick={ () =>  setVisibleDelete(!visibleDelete) }
             >
            {t('sellers.duplicate')}
        </Dropdown.Item>
        <Dropdown.Item 
            icon={RiDeleteBin5Line}
            // onClick={ () =>  setVisibleDelete(!visibleDelete) }
             >
            {t('sellers.remove')}
        </Dropdown.Item>
    </Dropdown>
  )
}
