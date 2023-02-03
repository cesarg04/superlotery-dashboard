import { Button, Table, TextInput } from "flowbite-react"
import { useSucursales } from "../../hooks/useSucursales"
import { useParseDate } from "../../../../hooks/useDateParse"
import { useAuthContext } from "../../../../hooks/useContext"
import { useState } from "react"
import { SucursaIinputsEditAndDelete, Sucursales } from "../../interfaces"
import { ActualizarSucursal } from "./ActualizarSucursal"
import { ModalConfitmation } from "../ModalConfitmation"
import { DropdownOptionsSuc } from "./DropdownOptionsSuc"

export const TableSucursales = () => {
    const [find, setFind] = useState('')

    const { stateAuth } = useAuthContext()
    const { getAllSucursales } = useSucursales(stateAuth.token!)

    const onChangeFind = (val: string) => {
        setFind(val)
    }


      

    return (
        <>
            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>
                        ID
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Nombre
                    </Table.HeadCell>
                    <Table.HeadCell>
                        direccion
                    </Table.HeadCell>
                    <Table.HeadCell>
                        tipo
                    </Table.HeadCell>
                    <Table.HeadCell>
                        fecha de creacion
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <TextInput
                            type={'text'}
                            placeholder='Buscar'
                            value={find}
                            onChange={({ target }) => onChangeFind(target.value)} />
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        getAllSucursales.data?.filter((e) => e.nombre.toLocaleLowerCase().includes(find)).map(sucursal => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={sucursal.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {sucursal?.id}
                                </Table.Cell>
                                <Table.Cell>
                                    {sucursal?.nombre}
                                </Table.Cell>
                                <Table.Cell>
                                    {sucursal.direccion}
                                </Table.Cell>
                                <Table.Cell>
                                    {sucursal.tipo}
                                </Table.Cell>
                                <Table.Cell>
                                    {useParseDate(sucursal.created_at)}
                                </Table.Cell>
                                <Table.Cell className="flex gap-3" >
                                    <DropdownOptionsSuc
                                    sucursal={ sucursal } />
                                    {/* <Button
                                        color={'warning'}
                                        onClick={() => replaceValues(sucursal)}
                                        className="font-semibold text-lg"
                                    >
                                        <FiEdit className="text-xl mx-1" />
                                        Editar
                                    </Button>
                                    <Button
                                        color={'failure'}
                                        onClick={() => onCloseModalDelete(true, sucursal.id)}
                                    >
                                        <RiDeleteBin5Line className="text-xl mx-1" />
                                        Eliminar
                                    </Button> */}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </>
    )
}
