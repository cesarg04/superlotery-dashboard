import { useState } from 'react';
import { Dropdown } from "flowbite-react"
import { Combinaciones } from "../../interfaces"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { ModalConfitmation } from "../ModalConfitmation"
import { EditCombunaciones } from './EditCombunaciones';

interface Props {
    combinacion: Combinaciones
}

export const DropdownOptioonsComb: React.FC<Props> = ({ combinacion }) => {

    const [visibleDelete, setvisibleDelete] = useState(false)
    const [visibleEdit, setvisibleEdit] = useState(false)

    return (
        <>
        <Dropdown label="Opciones" color={'default'} >
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
        <EditCombunaciones 
            visible={ visibleEdit }
            onClose={ (val) => setvisibleEdit(val) }
            combinacion={ combinacion }
         />
        <ModalConfitmation
            visible={ visibleDelete }
            onClose={ (val) => setvisibleDelete(val) }
            message='combinacion'
            endpoint='combinaciones'
            id={ combinacion.id }
            />
        </>
    )
}
