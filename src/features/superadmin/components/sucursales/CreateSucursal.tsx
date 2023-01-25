import { FC, useState } from 'react'
import { Button, Label, Modal, Select, Spinner, TextInput } from "flowbite-react"
import { AiOutlineWarning } from 'react-icons/ai'
import { useAddEditSucursal } from '../../hooks/useAddEditSucursal'
import { ToastComponent } from '../ToastSuccess'

interface Props {
    visible: boolean,
    onClose: (event: boolean) => any
}

export const CreateSucursal: FC<Props> = ({ visible, onClose }) => {


    const [showToast, setshowToast] = useState(true);

    const { register,
        handleSubmit,
        watch,
        setError,
        errors,
        onSubmit,
        emailRegex,
        isLoading }
        = useAddEditSucursal()

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
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Modal.Body className="">
                        <TextInput
                            placeholder="Nombre"
                            required
                            className="my-3"
                            {...register('nombre', { required: true })}
                            color={!!errors.nombre ? 'failure' : ''}
                            helperText={!!errors.nombre && <p>El nombre es requerido...</p>} />

                        <TextInput
                            placeholder="Direccion"
                            required
                            className="my-3"
                            {...register('direccion', { required: true })} />
                        <TextInput
                            placeholder="Tipo de sucursal"
                            required
                            className="my-3"
                            {...register('tipo', { required: true })} />

                        <TextInput
                            placeholder="Correo"
                            required
                            className="my-3"
                            type={'email'}
                            {...register('correo', {
                                pattern: {
                                    value: emailRegex,
                                    message: 'Email invalido'
                                }
                            })}
                            helperText={!!errors.correo && <h2>{errors.correo.message}</h2>} />

                        <TextInput
                            placeholder="Contraseña"
                            required
                            className="my-3"
                            type={'password'}
                            {...register('contraseña', { minLength: 8 })}
                            color={!!errors.contraseña ? 'failure' : 'primary'}
                        // helperText={ !!errors.contraseña  }
                        />
                        {
                            errors.contraseña &&
                            <div className='flex text-red-500' >
                                <AiOutlineWarning className='text-2xl mr-2' />
                                <h3>La contraseña debe tener almenos 8 caracteres</h3>
                            </div>


                        }
                    </Modal.Body>
                    <Modal.Footer className="justify-center">
                        <Button
                            type='submit'
                            className='w-3/6 font-bold text-3xl'
                            disabled={isLoading} >

                            {
                                isLoading && <div className="mr-3">
                                    <Spinner
                                        size="sm"
                                        light={true}
                                    />
                                </div>
                            }

                            Crear
                        </Button>

                    </Modal.Footer>

                </form>
                    


            </Modal>

            <ToastComponent show={ showToast } type='success' message='Componente creado con exito' />
        </>
    )
}
