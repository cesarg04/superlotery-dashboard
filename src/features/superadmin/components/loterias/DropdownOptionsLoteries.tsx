import { Dropdown } from "flowbite-react"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { SiLetsencrypt } from "react-icons/si"


export const DropdownOptionsLoteries = () => {
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
            // onClick={ () =>  setConfirmDelete(!confirmDelete) }
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

    </>
  )
}
