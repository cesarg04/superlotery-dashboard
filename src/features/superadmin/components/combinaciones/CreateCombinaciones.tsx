import { Button, Modal, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { useCreateCombinaciones } from "../../hooks/useCreateCombinaciones";

interface Props {
    visible: boolean;
    onClose: (val: boolean) => void;
}

export const CreateCombinaciones: React.FC<Props> = ({ visible, onClose }) => {


    const { register, handleSubmit, onSubmit, submitMutation } = useCreateCombinaciones()


    return (
        <Modal
            size={'sm'}
            show={visible}
            onClose={() => onClose(!visible)}>
            <Modal.Header>
                Crear combinacion
            </Modal.Header>
            <form action="" onSubmit={ handleSubmit(onSubmit) } >
                <Modal.Body>
                    <TextInput
                        type="text"
                        required
                        placeholder="Nombre"
                        className="my-2"
                        {...register('nombre')}
                    />
                    <TextInput
                        type="number"
                        required
                        placeholder="Monto en primera"
                        className="my-2"
                        {...register('monto_primera')}
                    />
                    <TextInput
                        type="number"
                        required
                        placeholder="Monto en segunda"
                        className="my-2"
                        {...register('monto_segunda')}
                    />
                    <TextInput
                        type="number"
                        required
                        placeholder="Monto en tercera"
                        className="my-2"
                        {...register('monto_tercera')}
                    />

                </Modal.Body>
                <Modal.Footer className="justify-center" >
                    <Button 
                        size={'md'}
                        type="submit" >
                            {
                                submitMutation.isLoading && <Spinner className="mx-2" />
                            }
                        Crear
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
