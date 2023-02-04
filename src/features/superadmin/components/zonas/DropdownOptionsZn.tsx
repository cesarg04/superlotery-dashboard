import { FC } from 'react'
import { Dropdown } from "flowbite-react"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { ActualizarZona } from "./ActualizarZona"
import { useState } from "react"
import { Zonas } from "../../interfaces"
import { Toaster } from 'react-hot-toast'
import { ModalConfitmation } from '../ModalConfitmation'

interface Props{
    zona: Zonas
}

export const DropdownOptionsZn:FC<Props> = ({ zona }) => {

    const [visibleEdit, setvisibleEdit] = useState(false);
    const [visibleDelete, setvisibleDelete] = useState(false);

    return (
        <>
        <Dropdown label="Opciones" color={'default'}>
                <Dropdown.Item 
                    icon={FiEdit}
                    onClick={ () => setvisibleEdit(!visibleEdit) }
                     >
                    Editar
                </Dropdown.Item>
                <Dropdown.Item 
                    icon={RiDeleteBin5Line}
                    onClick={ () => setvisibleDelete(!visibleDelete) }
                     >
                    Eliminar
                </Dropdown.Item>
            </Dropdown>
        
        <ActualizarZona
            visible={ visibleEdit }
            onClose={ () => setvisibleEdit(!visibleEdit) }
            { ...zona }
            />
        <ModalConfitmation
            visible={ visibleDelete }
            onClose={ (event) => setvisibleDelete(event) }
            message='zona'
            endpoint='zonas'
            id={ zona.id }
            />
            <Toaster/>
        </>
    )
}
