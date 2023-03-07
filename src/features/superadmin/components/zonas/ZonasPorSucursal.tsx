import { FC, useState } from 'react';
import { useZonas } from '../../hooks/useZonas';
import { useAuthContext } from '../../../../hooks/useContext';
import { Modal, Spinner, Table } from 'flowbite-react';


interface Props {
    id: number;
    visible: boolean;
    onClose: (val: boolean) => void;
}

export const ZonasPorSucursal: FC<Props> = ({ id, visible, onClose }) => {
    const { stateAuth } = useAuthContext()
    const { zonasForSucID } = useZonas(stateAuth.token!, id)

    zonasForSucID.isLoading && <Spinner aria-label="Extra large spinner example"
    size="xl"/>

    return (
        <Modal
            show={visible}
            size="2xl"
            popup={true}
            onClose={() => onClose(!visible) }

        >

            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6 px-2 pb-4 sm:pb-2 lg:px-2 xl:pb-2">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Zonas de la sucursal
                    </h3>

            {
                zonasForSucID.data && 
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                Nombre
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Provincia
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Limites
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {
                                zonasForSucID.data?.map(zona => (
                                    <>
                                        <Table.Cell>
                                            {zona.nombre}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {zona.provincia}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {zona.limites}
                                        </Table.Cell>
                                    </>
                                ))
                            }
                        </Table.Body>
                    </Table>
            }


                </div>
            </Modal.Body>
        </Modal>
    )
}
