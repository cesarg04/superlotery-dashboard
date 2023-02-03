import { FC, useState } from 'react'
import { Button, Modal, Spinner, TextInput, ToggleSwitch } from "flowbite-react"
import { AiOutlineWarning } from 'react-icons/ai'
import { useAddEditSucursal } from '../../hooks/useAddEditSucursal'
import { Toaster } from 'react-hot-toast'


interface Props {
    visible:        boolean;
    onClose:        (event: boolean) => any;
    id?:            number | undefined;
    nombre?:        string | undefined;
    direccion?:     string | undefined;
    tipo?:          string | undefined;
    correo?:        string | undefined;
    contraseña?:    string | undefined;
}

export const ActualizarSucursal: FC<Props> = (props) => {
    console.log(props)
   

    const { register,
        handleSubmit,
        errors,
        emailRegex,
        mutation,
        onEdit,
        onSubmitPassword,
        changePass, 
        setchangePass
         }
        = useAddEditSucursal()

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
                        <ToggleSwitch
                            checked={changePass}
                            label="Cambiar contra"
                            onChange={ () => setchangePass(!changePass) } />
                        <TextInput
                            placeholder="Nombre"
                            required
                            className="my-3"
                            {...register('nombre', { required: true })}
                            defaultValue={props.nombre}
                            color={!!errors.nombre ? 'failure' : ''}
                            disabled={ changePass }
                            helperText={!!errors.nombre && <p>El nombre es requerido...</p>} />

                        <TextInput
                            placeholder="Direccion"
                            required
                            className="my-3"
                            defaultValue={props.direccion}
                            disabled={ changePass }
                            {...register('direccion', { required: true })} />
                        <TextInput
                            placeholder="Tipo de sucursal"
                            required
                            defaultValue={props.tipo}
                            className="my-3"
                            disabled={ changePass }
                            {...register('tipo', { required: true })} />

                        <TextInput
                            placeholder="Correo"
                            defaultValue={props.correo}
                            className="my-3"
                            type={'email'}
                            disabled
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
                            defaultValue={props.contraseña}
                            disabled={ !changePass }
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

                            Editar
                        </Button>
                    </Modal.Footer>

                </form>

            </Modal>

            <Toaster />
        </>
    )
}
