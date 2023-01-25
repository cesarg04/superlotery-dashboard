import { Table, TextInput } from "flowbite-react"
import { useSucursales } from "../../hooks/useSucursales"
import { useParseDate } from "../../../../hooks/useDateParse"
import { useAuthContext } from "../../../../hooks/useContext"


export const TableSucursales = () => {

    const { stateAuth } = useAuthContext()

    const { getAllSucursales } = useSucursales(stateAuth.token!)

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
                            placeholder='Buscar'/>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        getAllSucursales.data?.map(sucursal => (
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
                                <a
                                    href="/tables"
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}
