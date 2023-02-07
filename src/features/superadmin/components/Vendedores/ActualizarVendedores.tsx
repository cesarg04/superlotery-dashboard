import { Button, Modal, Select, TextInput, ToggleSwitch } from "flowbite-react"
import { FC } from "react";
import { useEditVendedor } from "../../hooks/useEditVendedor";
import { Toaster } from "react-hot-toast";
import { getNameZonaById } from '../../../../helpers/parseZonas'


interface Props {
    visible: boolean;
    onClose: (event: boolean) => void;
    id?: number;
    cedula: string;
    nombre: string;
    apellidos: string;
    usuario: string;
    email: string;
    password: string;
    celular: string | undefined;
    direccion: string | undefined;
    comision_general: number;
    comision_supervision: number | undefined;
    comision_pale: number | undefined;
    comision_super_pale: number | undefined;
    comision_quiniela: number | undefined;
    comision_tripleta: number | undefined;
    zona_id: number;
    role_id: number;

}


export const ActualizarVendedores: FC<Props> = (props) => {

    const onCl = () => {
        props.onClose(!props.visible)
    }

    const {
        register,
        handleSubmit,
        zonasQuery,
        onSubmit,
        isEdit,
        setIsEdit
    } = useEditVendedor(props.id)

    return (
        <>
            <Modal
                show={props.visible}
                size="6xl"
                onClose={onCl}
            >
                <Modal.Header className="px-10" >
                    Crear vendedor
                    <ToggleSwitch
                        checked={isEdit}
                        label="Toggle me"
                        onChange={ () => setIsEdit(!isEdit) }
                        />
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="space-y-6 p-6 max-h-96 overflow-auto">
                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="Nombre"
                                    className='basis-2/6'
                                    defaultValue={props.nombre}
                                    type={'text'}
                                    {...register('nombre')}
                                />
                                <TextInput
                                    required
                                    addon="Apellidos"
                                    type={'text'}
                                    defaultValue={props.apellidos}
                                    className="basis-2/6"
                                    {...register('apellidos')}
                                />

                                <TextInput
                                    required
                                    addon="Cedula"
                                    type={'text'}
                                    className="basis-2/6"
                                    defaultValue={props.cedula}
                                    {...register('cedula')}
                                />
                            </div>

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="Usuario"
                                    className='basis-2/6'
                                    type={'text'}
                                    defaultValue={props.usuario}
                                    {...register('usuario')}
                                />
                                <TextInput
                                    required
                                    addon="Correo"
                                    type={'email'}
                                    className="basis-2/6"
                                    defaultValue={props.email}
                                    {...register('email')}
                                />
                            </div>

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="Direccion"
                                    className='basis-2/6'
                                    type={'text'}
                                    defaultValue={props.direccion}
                                    {...register('direccion')}
                                />

                                <TextInput
                                    required
                                    addon="Telefono"
                                    className='basis-2/6'
                                    type={'tel'}
                                    defaultValue={ props.celular }
                                    {...register('celular')}
                                />

                                <Select
                                    addon="Zona"
                                    className="basis-2/6"
                                    required
                                    {...register('zona_id')}
                                    defaultValue={ props.zona_id }
                                >
                                    {
                                        <option value={ props.zona_id } >
                                            { getNameZonaById(props.zona_id, zonasQuery.data || [] ) }
                                        </option>   
                                    }

                                    hello
                                </Select>
                            </div>

                            <div className='flex flex-row gap-3 my-10'>
                                <TextInput
                                    required
                                    addon="comision_general"
                                    className='basis-2/6'
                                    type={'number'}
                                    defaultValue={ props.comision_general }
                                    {...register('comision_general')}
                                />
                                <TextInput
                                    required
                                    addon="comision_supervision"
                                    type={'number'}
                                    className="basis-2/6"
                                    defaultValue={ props.comision_supervision }
                                    {...register('comision_supervision')}
                                />

                                <TextInput
                                    required
                                    addon="comision_pale"
                                    type={'number'}
                                    className="basis-2/6"
                                    defaultValue={ props.comision_pale }
                                    {...register('comision_pale')}
                                />
                            </div>

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="comision_super_pale"
                                    className='basis-2/6'
                                    type={'number'}
                                    defaultValue={ props.comision_super_pale }
                                    {...register('comision_super_pale')}
                                />
                                <TextInput
                                    required
                                    addon="comision_quiniela"
                                    type={'number'}
                                    className="basis-2/6"
                                    defaultValue={ props.comision_quiniela }
                                    {...register('comision_quiniela')}
                                />

                                <TextInput
                                    required
                                    addon="comision_tripleta"
                                    type={'number'}
                                    className="basis-2/6"
                                    defaultValue={ props.comision_tripleta }
                                    {...register('comision_tripleta')}
                                />
                            </div>

                            <div className="w-full flex place-content-center mt-20" >
                                <Button
                                    style={{ fontWeight: 'bold', fontSize: 30 }}
                                    type="submit"
                                    size={'xl'}
                                    className="w-30 text-3xl">
                                    Actualizar datos
                                </Button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {/*  */}
                </Modal.Footer>
            </Modal>

            <Toaster />
        </>
    )
}
