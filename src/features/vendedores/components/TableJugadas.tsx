import { Button, Spinner, Table } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { useJugadasContext } from "../hooks/useJugadasContext";
import { useAuthContext } from "../../../hooks/useContext";
import { useCombinaciones } from "../../superadmin/hooks/useCombinaciones";
import { getNameCombinacionById, getNameLoteryById } from "../../../helpers/parseZonas";
import { useLoterias } from "../../superadmin/hooks/useLoterias";
import { BiTrash } from "react-icons/bi";
import { useTickets } from "../hooks/useTickets";
import { Jugada, TicketsInputs } from "../interfaces";
import { DropdownJugadasOptions } from "./DropdownJugadasOptions";

export const TableJugadas = () => {

    const { stateAuth } = useAuthContext();
    const { getAllCombinaciones } = useCombinaciones(stateAuth.token!)
    const { getAllLoteries } = useLoterias(stateAuth.token!)
    const { t, i18n } = useTranslation('global');
    const { jugadasState, deleteJugadas } = useJugadasContext();

    const { crearTicket } = useTickets()

    const create = () => {

        const newJug: Jugada[] = []

        // const jugadaParseada = jugadasState.jugadas?.forEach(jugada => {
        //     const { id, ...rest } =  jugada;
        //     newJug.push(rest)
        // })


        const ticket: TicketsInputs = {
            vendedor_id: stateAuth.user?.id || 0,
            jugadas:    newJug!
        }



        if (jugadasState.jugadas) {
            crearTicket.mutate(ticket)
        }
    }

    return (
        <div className="w-6/12" >
            <div className="flex justify-between pb-5" >
                <h1 className="text-3xl pt-2 text-gray-500 " >Jugadas</h1>
                <Button
                    color={'success'}
                    onClick={create}
                    disabled={ crearTicket.isLoading }
                >
                    {
                        crearTicket.isLoading ? <Spinner/> : 'Crear Ticket'
                    }
                </Button>
            </div>
            <Table className="max-h-96 overflow-auto" >
                <Table.Head>
                    <Table.HeadCell>
                        {t('sellers.type')}
                    </Table.HeadCell>
                    <Table.HeadCell>
                        {t('sellers.move')}
                    </Table.HeadCell>
                    <Table.HeadCell>
                        {t('sellers.lotery')}
                    </Table.HeadCell>
                    <Table.HeadCell>
                        {t('sellers.amount')}
                    </Table.HeadCell>
                    <Table.HeadCell className="flex justify-center items-center" >
                        Options
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>
                        <Table.Cell>
                            $2999
                        </Table.Cell>
                    </Table.Row> */}

                    {
                        jugadasState.jugadas?.map((jugada, index) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={+jugada.monto + Math.random()} >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {
                                        getNameCombinacionById(jugada.combinacion_id, getAllCombinaciones.data!)
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        jugada.numeros.map(jug => (
                                            <>
                                                {
                                                    `${jug.numero} `
                                                }
                                            </>
                                        ))
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        `
                                        ${jugada.loteria_id} - 
                                        ${getNameLoteryById(jugada.loteria_id, getAllLoteries.data!)}`
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        jugada.monto
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    <DropdownJugadasOptions/>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>

    )
}
