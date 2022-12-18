import { Button, Label, Modal, Select, TextInput } from "flowbite-react"
import { FC } from "react"


interface Props{
    visible: boolean
    onClose: (event: boolean) => any

}

export const CreateZona:FC<Props> = ({ visible, onClose }) => {

    const onClick = () => {
        onClose(!visible)
    }
    return (
        <Modal
            show={visible}
            size="lg"
            onClose={onClick}>
            <Modal.Header>
                Crear zona
            </Modal.Header>
            <form action="">
                <Modal.Body className="">


                    <div className="space-y-6">
                        <div className="w-full flex justify-between gap-4">
                            <TextInput
                                placeholder="Nombre"
                                required
                                className="w-3/6" />

                            <TextInput
                                placeholder="Pais"
                                required
                                className="w-3/6" />

                        </div>

                        <div className="flex justify-between gap-4">
                            <TextInput
                                placeholder="Provincia"
                                required
                                className="w-3/6" />


                            <TextInput
                                placeholder="Limite"
                                type={'number'}
                                required
                                className="w-3/6" />

                        </div>

                        <div className="flex justify-between gap-4">

                            <div
                                className="w-3/6"
                                id="select">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="peso"
                                        value="Seleccione el tipo de moneda"
                                    />
                                </div>
                                <Select
                                    id="peso"
                                    required={true}
                                >
                                    <option>
                                        USD
                                    </option>
                                    <option>
                                        DOP
                                    </option>
                                    <option>
                                        HTG
                                    </option>
                                </Select>
                            </div>
                            <div id="select" className="w-3/6">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="sucursal"
                                        value="Seleccione la sucursal"
                                    />
                                </div>
                                <Select
                                    id="sucursal"
                                    required={true}
                                >
                                    <option>
                                        USD
                                    </option>
                                    <option>
                                        DOP
                                    </option>
                                    <option>
                                        HTG
                                    </option>
                                </Select>
                            </div>
                        </div>

                    </div>


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
    )
}
