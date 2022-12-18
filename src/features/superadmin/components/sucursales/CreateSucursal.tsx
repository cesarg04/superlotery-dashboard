import { FC } from 'react'
import { Button, Label, Modal, Select, TextInput } from "flowbite-react"


interface Props {
    visible: boolean,
    onClose: (event:boolean) => any
}

export const CreateSucursal: FC<Props> = ({ visible, onClose }) => {

    const onClick = () => {
        onClose(!visible)
    }

    return (

        <>
            <Modal
                show={visible}
                size="md"
                onClose={onClick}>
                <Modal.Header>
                    Crear Sucursal
                </Modal.Header>
                <form action="">
                    <Modal.Body className="">
                        <TextInput
                            placeholder="Nombre"
                            required
                            className="my-3" />

                        <TextInput
                            placeholder="Direccion"
                            required
                            className="my-3" />
                        <TextInput
                            placeholder="Tipo de sucursal"
                            required
                            className="my-3" />

                    </Modal.Body>
                    <Modal.Footer className="justify-center">
                        <Button
                            type='submit'
                            className='w-3/6 font-bold text-3xl'>
                            Crear
                        </Button>

                    </Modal.Footer>

                </form>



            </Modal>
        </>
    )
}
