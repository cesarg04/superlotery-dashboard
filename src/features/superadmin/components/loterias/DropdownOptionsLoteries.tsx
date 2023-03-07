import { FC ,useState } from 'react';
import { Dropdown } from "flowbite-react"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { SiLetsencrypt } from "react-icons/si"
import { ChangePass } from "../ChangePass"
import { ModalConfitmation } from "../ModalConfitmation"
import { Loterias } from '../../interfaces';

interface Props {
  loteria:  Loterias
}

export const DropdownOptionsLoteries:FC<Props> = ({ loteria }) => {

  const [visibleDelete, setVisibleDelete] = useState(false);


  return (
    <>
    <Dropdown label="Opciones" color={'default'}>
        <Dropdown.Item 
            icon={FiEdit}
            // onClick={ () => replaceValues(sucursal) } 
            >
            Editar
        </Dropdown.Item>
        <Dropdown.Item 
            icon={RiDeleteBin5Line}
            onClick={ () =>  setVisibleDelete(!visibleDelete) }
             >
            Eliminar
        </Dropdown.Item>
        <Dropdown.Item 
            icon={SiLetsencrypt}
            // onClick={ () => setChangepw(!changepw) } 
            >
            Cambiar contraseña
        </Dropdown.Item>
    </Dropdown>

    <ModalConfitmation
      visible={ visibleDelete }
      onClose={ (val) => setVisibleDelete(val) }
      message='loteria'
      endpoint='loterias'
      id={ loteria.id }
    />

    </>
  )
}
