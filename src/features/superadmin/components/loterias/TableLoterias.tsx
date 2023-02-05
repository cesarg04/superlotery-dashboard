import { useState } from 'react'
import { Badge, Table, TextInput } from "flowbite-react"
import { useLoterias } from "../../hooks/useLoterias"
import { useAuthContext } from "../../../../hooks/useContext"
import { DropdownOptionsLoteries } from './DropdownOptionsLoteries'

export const TableLoterias = () => {
    const [find, setFind] = useState('')
    const { stateAuth } = useAuthContext()

    const { getAllLoteries } = useLoterias(stateAuth.token || '')


    const onChangeFind = ( val: string ) => {
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
                            placeholder='Buscar' 
                            value={ find }
                            onChange={ ({ target }) => onChangeFind( target.value ) } />
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        getAllLoteries.data?.filter((e) => e.nombre.toLocaleLowerCase().includes( find )).map(loterie => (
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
                                    {(loterie.estado === 1) ?
                                        <Badge color="success" size="sm" >Activa</Badge>
                                        : <Badge color="warning" size="sm">Inactiva</Badge>}
                                </Table.Cell>
                                <Table.Cell>
                                    <br />
                                </Table.Cell>
                                <Table.Cell>
                                   <DropdownOptionsLoteries/>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}
