import { FC, useState } from 'react'
import { Button, Modal, Spinner, TextInput, ToggleSwitch } from "flowbite-react"
import { AiOutlineWarning } from 'react-icons/ai'
import { useAddSucursal } from '../../hooks/useAddSucursal'
import { Toaster } from 'react-hot-toast'
import { useEditSucursal } from '../../hooks/useEditSucursal'


interface Props {
    visible:        boolean;
    onClose:        (event: boolean) => any;
    id?:            number | undefined;
    nombre?:        string | undefined;
    direccion?:     string | undefined;
    tipo?:          string | undefined;
    email?:         string | undefined;
    contraseña?:    string | undefined;
}

export const ActualizarSucursal: FC<Props> = (props) => {

    // console.log(props)

    const { register,
        handleSubmit,
        errors,
        editMutation,
        onEdit,
        emailRegex
        }
        = useEditSucursal(props.id)

    const onClick = () => {
        props.onClose(!props.visible)
    }

    const onChange = () => {

    }


    return (

        <>
            <Modal
                show={props.visible}
                size="md"
                onClose={onClick}>
                <Modal.Header>
                    Editar Sucursal
                </Modal.Header>
                <form onSubmit={
                    handleSubmit(onEdit)
                } >
                    <Modal.Body className="">
                        <TextInput
                            placeholder="Nombre"
                            required
                            className="my-3"
                            {...register('nombre', { required: true })}
                            defaultValue={props.nombre}
                            color={!!errors.nombre ? 'failure' : ''}
                            helperText={!!errors.nombre && <p>El nombre es requerido...</p>} />

                        <TextInput
                            placeholder="Direccion"
                            required
                            className="my-3"
                            defaultValue={props.direccion}
                            {...register('direccion', { required: true })} />
                        <TextInput
                            placeholder="Tipo de sucursal"
                            required
                            defaultValue={props.tipo}
                            className="my-3"
                            {...register('tipo', { required: true })} />

                        <TextInput
                            placeholder="Correo"
                            defaultValue={props.email}
                            className="my-3"
                            type={'text'}
                            {...register('email', { required: true })}
                            helperText={!!errors.email && <h2>{errors.email.message}</h2>} />
                    </Modal.Body>
                    <Modal.Footer className="justify-center">
                        <Button
                            type='submit'
                            className='w-3/6 font-bold text-3xl'
                            disabled={editMutation.isLoading} >

                            {
                                editMutation.isLoading && <div className="mr-3">
                                    <Spinner
                                        size="sm"
                                        light={true}
                                    />
                                </div>
                            }

                            Editar
                        </Button>
                    </Modal.Footer>

                </form>

            </Modal>

            <Toaster />
        </>
    )
}
