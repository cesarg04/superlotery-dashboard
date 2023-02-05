import { useState } from 'react';
import { Table, TextInput } from "flowbite-react"
import { useAuthContext } from '../../../../hooks/useContext';
import { useVendedores } from '../../hooks/useVendedores';
import { useZonas } from '../../hooks/useZonas';
import { getNameZonaById } from '../../../../helpers/parseZonas';

export const TableVendedores = () => {

    const [find, setfind] = useState('')
    const { stateAuth } = useAuthContext()

    const { vendedoresQuery } = useVendedores( stateAuth.token! )
    const { zonasQuery } = useZonas(stateAuth.token!)

    const onChangeFind = ( val: string ) => {
        setfind(val)
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
                        Usuario
                    </Table.HeadCell>
                    <Table.HeadCell>
                        correo
                    </Table.HeadCell>
                    <Table.HeadCell>
                        zona
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
                        vendedoresQuery.data && vendedoresQuery.data?.filter((e) => e.nombre.toLocaleLowerCase().includes(find)).map(vend => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={vend.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {vend?.id}
                                </Table.Cell>
                                <Table.Cell>
                                    {vend?.nombre}
                                </Table.Cell>
                                <Table.Cell>
                                    {vend.usuario}
                                </Table.Cell>
                                <Table.Cell>
                                    {vend.email}
                                </Table.Cell>
                                <Table.Cell>
                                    { getNameZonaById( vend.zona_id, zonasQuery.data || [] ) }
                                </Table.Cell>
                                <Table.Cell className="flex gap-3" >
                                    {/* <DropdownOptionsSuc
                                    sucursal={ sucursal } /> */}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </>
    )
}
