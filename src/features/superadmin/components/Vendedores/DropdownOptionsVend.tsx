import { Dropdown } from "flowbite-react"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { SiLetsencrypt } from "react-icons/si"
import { Vendedores } from "../../interfaces"
import { FC, useState } from "react"
import { ModalConfitmation } from "../ModalConfitmation"
import { ChangePass } from "../ChangePass"
import { ActualizarVendedores } from "./ActualizarVendedores"


interface Props {
    vendendor: Vendedores,
}

export const DropdownOptionsVend: FC<Props> = ({ vendendor }) => {

    const [visibleDelete, setVisibleDelete] = useState(false);
    const [visiblePassCw, setvisiblePassCw] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);


    return (
        <>
            <Dropdown label="Opciones" color={'default'}>
                <Dropdown.Item
                    icon={FiEdit}
                    onClick={() => setVisibleEdit(!visibleEdit) } 
                    >
                    Ver / editar
                </Dropdown.Item>
                <Dropdown.Item
                    icon={RiDeleteBin5Line}
                    onClick={() => setVisibleDelete(!visibleDelete)} 
                    >
                    Eliminar
                </Dropdown.Item>
                <Dropdown.Item
                    icon={SiLetsencrypt}
                    onClick={() => setvisiblePassCw(!visiblePassCw)} 
                    >
                    Cambiar contraseña
                </Dropdown.Item>
            </Dropdown>
        <ModalConfitmation
            id={ vendendor.id }
            visible={ visibleDelete }
            onClose={ (event) => setVisibleDelete(event) }
            message="vendedor"
            endpoint="vendedores"
            />
        <ChangePass
            key_end="vendedores"
            visible={ visiblePassCw }
            onClose={ (event) => setvisiblePassCw(event) }
            id={ vendendor.id }
        />
        <ActualizarVendedores 
            visible={ visibleEdit }
            onClose={ (event) => setVisibleEdit(event) }
            { ...vendendor }
            />
        </>
    )
}
