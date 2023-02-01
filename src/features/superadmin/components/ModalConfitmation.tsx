import { Button, Modal } from "flowbite-react"
import { FC } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi"
import { useDeleteSettings } from "../hooks/useDeleteSettings";
import { Toaster } from "react-hot-toast";

interface Props {
    visible: boolean;
    onClose: (val: boolean) => void;
    message: string;
    endpoint: string;
    id: number | undefined
}

export const ModalConfitmation: FC<Props> = ({ visible, onClose, message, endpoint, id }) => {
    const { onDelete, mutation } = useDeleteSettings(endpoint);

    const deleteAny = () => {
        onDelete(id!)
        onClose(!visible)
    }
    const cancel = () => {
        onClose(!visible)
    }

    return (
        <>
            <Modal
                show={visible}
                size="md"
                popup={visible}
                onClose={cancel}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Esta seguro que desea eliminar esta {message}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={deleteAny}
                            >
                                Si, estoy seguro
                            </Button>
                            <Button
                                color="gray"
                                onClick={cancel}
                            >
                                No, cancelar
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Toaster/>
        </>
    )
}
