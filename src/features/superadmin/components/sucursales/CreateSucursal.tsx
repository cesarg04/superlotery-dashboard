import { FC } from 'react'
import { Button, Modal, Spinner, TextInput } from "flowbite-react"
import { AiOutlineWarning } from 'react-icons/ai'
import { useAddEditSucursal } from '../../hooks/useAddEditSucursal'
import { Toaster } from 'react-hot-toast'


interface Props {
    visible: boolean,
    onClose: (event: boolean) => any;
    mode: 'add' | 'edit';
    nombre?: string;
    direccion?: string;
    tipo?: string;
    correo?: string;
    contraseña?: string;


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
        onEdit }
        = useAddEditSucursal()        

    const onClick = () => {
        props.onClose(!props.visible)
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
                        props.mode === 'add' 
                        ? handleSubmit(onSubmit)
                        : handleSubmit(onEdit)
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
                            required
                            defaultValue={props.correo}
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
                            defaultValue={props.contraseña}
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

                        {
                            props.mode === 'add' ?
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

                            :
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
                        }

                    </Modal.Footer>

                </form>
                    


            </Modal>

            <Toaster/>  
        </>
    )
}
