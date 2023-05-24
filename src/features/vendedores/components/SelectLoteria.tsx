import { Button, Modal, Select } from "flowbite-react"
import { FC } from "react";
import { useJugadas } from "../hooks/useJugadas";

interface Props {
    visible: boolean;
    onClose: (val: boolean) => void;
}

export const SelectLoteria: FC<Props> = ({ visible, onClose }) => {

    const { t, getAllLoteries } = useJugadas()



    return (
        <Modal
            size={'sm'}
            show={visible}
            onClose={() => onClose(!visible)}
        >
            <Modal.Header>
                <h2> { t('sellers.select_lotery') } </h2>
            </Modal.Header>

            <Modal.Body>

                <Select>
                    {
                        getAllLoteries.data?.map(loteria => (
                            <option
                                key={loteria.id}
                                value={loteria.id}
                            >
                                {
                                    loteria.nombre
                                }
                            </option>
                        ))
                    }

                </Select>

                <Button>
                    {
                        t('sellers.select')
                    }
                </Button>

            </Modal.Body>

        </Modal>
    )
}
