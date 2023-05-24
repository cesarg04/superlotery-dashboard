import { Button, Modal, Select } from "flowbite-react"
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useJugadas } from "../hooks/useJugadas";
import { useJugadasContext } from "../hooks/useJugadasContext";
import { toast } from "react-hot-toast";

interface Props {
    visible: boolean;
    onClose: (val: boolean) => void;
    // idJugada: string
}


export const PaleoSuper: React.FC<Props> = ({ visible, onClose }) => {
    const { t } = useTranslation('global')
    const { getAllCombinaciones } = useJugadas()
    const { jugadasState, addPaleoSuper } = useJugadasContext()
    const [paleComb, setpaleComb] = useState(0)
    const [superPaleComb, setsuperPaleComb] = useState(0)
    const [idSelected, setidSelected] = useState(0)

    useEffect(() => {

        const paleParse = getAllCombinaciones.data?.find(comb => comb.nombre === 'Pale')?.id
        setpaleComb(paleParse || 0)

        const superPaleParse = getAllCombinaciones.data?.find(comb => comb.nombre === 'Superpale')?.id

        setsuperPaleComb(superPaleParse || 0)

    }, [visible])


    const onChange = (value: string) => {
        setidSelected(+value)
    }

    const selectLoteria = () => {
        const jugada = jugadasState.jugadas?.find(jugad => jugad.id === jugadasState.idJugadEnCurso);
        addPaleoSuper(jugada!, idSelected)

        if (!idSelected || idSelected === 0) {
            toast.error('Seleccione una opcion valida', {
                position: 'top-right',
                duration: 4000
            })
            return
        }

        onClose(false)
    }

    return (
        <Modal
            size={'sm'}
            show={visible}
            onClose={() => onClose(!visible)}
        >
            <Modal.Header>
                <h2>{t('sellers.select_option')}</h2>

            </Modal.Header>
            <Modal.Body className="flex flex-col items-center" >
                <Select
                    className="w-full"
                    onChange={({ target }) => onChange(target.value)}
                >
                    <option selected disabled>
                        {t('sellers.select')}
                    </option>

                    <option
                        value={paleComb}
                    >
                        Pale
                    </option>
                    <option
                        value={superPaleComb}
                    >
                        Superpale
                    </option>
                </Select>
                <Button className="my-6"
                    onClick={selectLoteria}
                >
                    {t('sellers.select')}
                </Button>
            </Modal.Body>
        </Modal>
    )
}
