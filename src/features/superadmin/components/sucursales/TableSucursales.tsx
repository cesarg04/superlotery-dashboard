import { Button, Table, TextInput } from "flowbite-react"
import { useSucursales } from "../../hooks/useSucursales"
import { useParseDate } from "../../../../hooks/useDateParse"
import { useAuthContext } from "../../../../hooks/useContext"
import { useState } from "react"
import { Sucursales, Sucursalinputs } from "../../interfaces"
import { CreateSucursal } from "./CreateSucursal"


export const TableSucursales = () => {
    const [dataEdit, setdataEdit] = useState<Sucursalinputs>()
    const [visibleEdit, setvisibleEdit] = useState(false)
    const [find, setFind] = useState('')
    const { stateAuth } = useAuthContext()  
    const { getAllSucursales } = useSucursales(stateAuth.token!)
    
    
    const onClose = (event: boolean) => {
        setvisibleEdit(event)
    }

    // const replaceValues = ( data: Sucursales ) => {
    //     setdataEdit({
    //         nombre: data.nombre,
    //         direccion: data.direccion,
    //         correo: 
    //     })
    // }

    const onChangeFind = (val: string) => {
        setFind( val )
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
                            value={ find }
                            onChange={ ({ target }) => onChangeFind(target.value) } />
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        getAllSucursales.data?.filter((e) =>e.nombre.toLocaleLowerCase().includes(find) ).map(sucursal => (
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
                            <Table.Cell>
                                <Button 
                                color={'success'}
                                 >
                                    Editar
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <CreateSucursal 
                visible={ visibleEdit }
                onClose={ (event) => onClose(event) }
                mode="edit"
                {...dataEdit} />
        </>
    )
}
