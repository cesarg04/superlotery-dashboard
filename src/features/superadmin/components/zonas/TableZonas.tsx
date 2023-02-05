import { useState } from 'react';
import { Button, Table, TextInput } from "flowbite-react";
import { useZonas } from "../../hooks/useZonas";
import { parseMoney } from "../../../../helpers/parseMoney";
import { useAuthContext } from "../../../../hooks/useContext";
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { ModalConfitmation } from '../ModalConfitmation';
import { ZonasInputs } from '../../interfaces';
import { DropdownOptionsZn } from './DropdownOptionsZn';

export const TableZonas = () => {
    const [dataEdit, setdataEdit] = useState<ZonasInputs>()
    const [visibleEdit, setvisibleEdit] = useState(false)
    const [find, setFind] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [idDelete, setidDelete] = useState< number | undefined >()
    const { stateAuth } = useAuthContext()
    const { zonasQuery } = useZonas(stateAuth.token || '');


    const onChangeInput = (val: string) => {

        setFind(val)
    }

    const onCloseModalDelete = ( event: boolean, id: number ) => {
        setConfirm(event)
        setidDelete(id)
    }   

    const replaceValues = (data: ZonasInputs) => {
        setdataEdit({
            ...data
        })
        setvisibleEdit(!visibleEdit)
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
                        Porvincia
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Limites
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Tipo de moneda
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Sucursal
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <TextInput
                            type={'text'}
                            placeholder='Buscar'
                            value={find}
                            onChange={({ target }) => onChangeInput(target.value)}
                        />
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body 
                className="divide-y"
                >

                    {
                        zonasQuery.data?.filter((e) => e.nombre.toLocaleLowerCase().includes(find)).map(data => (
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
                                    {parseMoney(Number(data.limites))}
                                </Table.Cell>
                                <Table.Cell>
                                    {data?.tipo_moneda}
                                </Table.Cell>
                                <Table.Cell>
                                    {data?.sucursal_id}
                                </Table.Cell>
                                <Table.Cell className='flex gap-3' >
                                    <DropdownOptionsZn 
                                        zona={ data }
                                        />
                                    {/* <Button
                                        color={'warning'}
                                        // onClick={() => replaceValues(sucursal)}
                                        className="font-semibold text-lg"
                                    >
                                        <FiEdit className="text-xl mx-1" />
                                        Editar
                                    </Button>
                                    <Button
                                        color={'failure'}
                                        onClick={() => onCloseModalDelete(true, data.id)}
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

            <ModalConfitmation
                visible={ confirm }
                message='Zona'
                endpoint='zonas'
                id={ idDelete }
                onClose={ (event) => setConfirm(event) }
                     />
        </>
    )
}
