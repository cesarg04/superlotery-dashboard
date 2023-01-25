import { Table, TextInput } from "flowbite-react"
import { useZonas } from "../../hooks/useZonas";
import { parseMoney } from "../../../../helpers/parseMoney";
import { useAuthContext } from "../../../../hooks/useContext";

export const TableZonas = () => {

    const { stateAuth } = useAuthContext()
    const { zonasQuery } = useZonas(stateAuth.token || '');

    return (
        <Table striped={true}>
            <Table.Head>
                <Table.HeadCell>
                    ID
                </Table.HeadCell>
                <Table.HeadCell>
                    Nombre
                </Table.HeadCell>
                <Table.HeadCell>
                    Porvincia
                </Table.HeadCell>
                <Table.HeadCell>
                    Limites
                </Table.HeadCell>
                <Table.HeadCell>
                    Tipo de moneda
                </Table.HeadCell>
                <Table.HeadCell>
                    <TextInput
                        type={'text'}
                        placeholder='Buscar'/>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">

                {
                    zonasQuery.data?.map(data => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data.id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {data?.id}
                            </Table.Cell>
                            <Table.Cell>
                                {data?.nombre}
                            </Table.Cell>
                            <Table.Cell>
                                {data?.provincia}
                            </Table.Cell>
                            <Table.Cell>
                                { parseMoney(Number(data.limites)) }
                            </Table.Cell>
                            <Table.Cell>
                                {data?.tipo_moneda}
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
    )
}
