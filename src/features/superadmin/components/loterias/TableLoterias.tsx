import { Table, TextInput } from "flowbite-react"
import { useLoterias } from "../../hooks/useLoterias"

export const TableLoterias = () => {

    const { getAllLoteries } = useLoterias()


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
                        Abreviatura
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Estado
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <br />
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <TextInput
                            type={'text'}
                            placeholder='Buscar' />
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        getAllLoteries.data?.map(loterie => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={loterie.id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {loterie?.id}
                            </Table.Cell>
                            <Table.Cell>
                                {loterie?.nombre}
                            </Table.Cell>
                            <Table.Cell>    
                                {loterie.abreviatura}
                            </Table.Cell>
                            <Table.Cell>
                                { (loterie.estado === 1) ? 'Activo' : 'Inactivo' }
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
