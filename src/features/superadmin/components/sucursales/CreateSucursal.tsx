import { FC } from 'react'
import { Button, Modal, Spinner, TextInput, ToggleSwitch } from "flowbite-react"
import { AiOutlineWarning } from 'react-icons/ai'
import { useAddSucursal } from '../../hooks/useAddSucursal'
import { Toaster } from 'react-hot-toast'


interface Props {
    visible: boolean,
    onClose: (event: boolean) => any;
}

export const CreateSucursal: FC<Props> = (props) => {

    const { register,
        handleSubmit,
        watch,
        setError,
        errors,
        onSubmit,
        emailRegex,
        mutation,
             }
        = useAddSucursal()

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
                    Crear Sucursal
                </Modal.Header>
                <form onSubmit={
                    handleSubmit(onSubmit)
                } >
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
                            className="my-3"
                            type={'email'}
                            {...register('email', {
                                pattern: {
                                    value: emailRegex,
                                    message: 'Email invalido'
                                }
                            })}
                            helperText={!!errors.email && <h2>{errors.email.message}</h2>} />

                        <TextInput
                            placeholder="Contraseña"
                            className="my-3"
                            type={'password'}
                            {...register('password', { minLength: 8 })}
                            color={!!errors.password ? 'failure' : 'primary'}
                        // helperText={ !!errors.contraseña  }
                        />
                        {
                            errors.password &&
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
                                    disabled={mutation.isLoading} >

                                    {
                                        mutation.isLoading && <div className="mr-3">
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

            <Toaster />
        </>
    )
}
