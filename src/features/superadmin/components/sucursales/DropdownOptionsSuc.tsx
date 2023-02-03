import { FC, useState } from 'react'
import { Dropdown } from "flowbite-react"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { SiLetsencrypt } from "react-icons/si"
import { SucursaIinputsEditAndDelete, Sucursales } from "../../interfaces"
import { ModalConfitmation } from '../ModalConfitmation'
import { ActualizarSucursal } from './ActualizarSucursal'
import { ChangePass } from './ChangePass'

interface Props {
    sucursal: Sucursales
}

export const DropdownOptionsSuc: FC<Props> = ({ sucursal }) => {
    const [dataEdit, setdataEdit] = useState<SucursaIinputsEditAndDelete>()
    const [visibleEdit, setvisibleEdit] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [idDelete, setidDelete] = useState<number | undefined>()
    const [changepw, setChangepw] = useState(false)

    const onClose = (event: boolean) => {
        setvisibleEdit(event)
    }


    const replaceValues = (data: Sucursales) => {
        setdataEdit({
            id: data.id,
            nombre: data.nombre,
            direccion: data.direccion,
            email: data.email,
            tipo: data.tipo,
            // contraseña: data.,
        })

        setvisibleEdit(!visibleEdit)
    }


    const onCloseModalDelete = (event: boolean, id: number) => {
        setConfirmDelete(event)
        setidDelete(id)
    }

    return (
        <>
            <Dropdown label="Opciones" color={'default'}>
                <Dropdown.Item 
                    icon={FiEdit}
                    onClick={ () => replaceValues(sucursal) } >
                    Editar
                </Dropdown.Item>
                <Dropdown.Item 
                    icon={RiDeleteBin5Line}
                    onClick={ () => onCloseModalDelete(!confirmDelete, sucursal.id) } >
                    Eliminar
                </Dropdown.Item>
                <Dropdown.Item 
                    icon={SiLetsencrypt}
                    onClick={ () => setChangepw(!changepw) } >
                    Cambiar contraseña
                </Dropdown.Item>
            </Dropdown>

            <ModalConfitmation
                visible={ confirmDelete }
                message="sucursal"
                endpoint="sucursales"
                id={ idDelete }
                onClose={(event) => setConfirmDelete(event)} />
            <ActualizarSucursal
                visible={ visibleEdit }
                onClose={ (event) => onClose(event) }
                { ...dataEdit }
            />
            <ChangePass
                id={ sucursal.id }
                visible={ changepw }
                onClose={ (val: boolean) => setChangepw(val) }
            />
        </>
    )
}
