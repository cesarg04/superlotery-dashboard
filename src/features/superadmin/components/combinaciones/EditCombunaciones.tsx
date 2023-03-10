import { Button, Modal, Spinner, TextInput } from "flowbite-react"
import { Combinaciones, CombinacionesInput } from "../../interfaces";
import { useEditCombinaciones } from "../../hooks/useEditCombinaciones";
import { FiEdit } from "react-icons/fi";

interface Props {
    visible: boolean;
    onClose: (val: boolean) => void;
    combinacion: Combinaciones
}

export const EditCombunaciones:React.FC<Props> = ({ visible, onClose, combinacion }) => {

    const { register, handleSubmit, editCombMutation, onSubmit } = useEditCombinaciones()

    return (
        <Modal
            size={'sm'}
            show={visible}
            onClose={() => onClose(!visible)}>
            <Modal.Header>
                Editar combinacion
            </Modal.Header>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <Modal.Body>
                    <TextInput
                        type="text"
                        required
                        placeholder="Nombre"
                        defaultValue={combinacion.nombre}
                        className="my-2"
                        {...register('nombre')}
                    />
                    <TextInput
                        type="number"
                        required
                        placeholder="Monto en primera"
                        className="my-2"
                        defaultValue={ combinacion.monto_primera }
                        {...register('monto_primera')}
                    />
                    <TextInput
                        type="number"
                        required
                        placeholder="Monto en segunda"
                        className="my-2"
                        defaultValue={ combinacion.monto_segunda }
                        {...register('monto_segunda')}
                    />
                    <TextInput
                        type="number"
                        required
                        placeholder="Monto en tercera"
                        className="my-2"
                        defaultValue={ combinacion.monto_tercera }
                        {...register('monto_tercera')}
                    />

                </Modal.Body>
                <Modal.Footer className="justify-center" >
                    <Button
                        size={'md'}
                        type="submit" >
                        {
                            editCombMutation.isLoading 
                            ? <Spinner className="mx-2 text-xl  " />
                            : <FiEdit className="text-xl mx-2" />
                        }
                        Editar
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
