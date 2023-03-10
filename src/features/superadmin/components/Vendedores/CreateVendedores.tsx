import { Button, Checkbox, Label, Modal, Select, TextInput } from "flowbite-react";
import { FC } from "react";
import { useAddVendedor } from "../../hooks/useAddVendedor";
import { Toaster } from "react-hot-toast";

interface Props {
    visible: boolean;
    onClose: (event: boolean) => void;

}

export const CreateVendedores: FC<Props> = ({ visible, onClose }) => {

    const {
        zonasQuery,
        register,
        errors,
        handleSubmit,
        onSubmit,
        getAllLoteries
    } = useAddVendedor()

    const onCl = () => {
        onClose(!visible)
    }

    return (

        <>
            <Modal
                show={visible}
                size="6xl"
                onClose={onCl}
            >
                <Modal.Header className="px-10" >
                    Crear vendedor
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="space-y-10 p-6 max-h-96 overflow-auto">

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="Nombre"
                                    className='basis-2/6'
                                    type={'text'}
                                    {...register('nombre')}
                                />
                                <TextInput
                                    required
                                    addon="Apellidos"
                                    type={'text'}
                                    className="basis-2/6"
                                    {...register('apellidos')}
                                />

                                <TextInput
                                    required
                                    addon="Cedula"
                                    type={'text'}
                                    className="basis-2/6"
                                    {...register('cedula')}
                                />
                            </div>

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="Usuario"
                                    className='basis-2/6'
                                    type={'text'}
                                    {...register('usuario')}
                                />
                                <TextInput
                                    required
                                    addon="Correo"
                                    type={'email'}
                                    className="basis-2/6"
                                    {...register('email')}
                                />

                                <TextInput
                                    required
                                    addon="Contraseña"
                                    type={'password'}
                                    className="basis-2/6"
                                    {...register('password')}
                                />
                            </div>

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="Direccion"
                                    className='basis-2/6'
                                    type={'text'}
                                    {...register('direccion')}
                                />

                                <TextInput
                                    required
                                    addon="Telefono"
                                    className='basis-2/6'
                                    type={'tel'}
                                    {...register('celular')}
                                />

                                <Select
                                    required
                                    addon="Zona"
                                    className="basis-2/6"
                                    {...register('zona_id')}
                                >
                                    {
                                        zonasQuery.data?.map((zona) => (
                                            <option
                                                key={zona.id}
                                                value={zona.id}
                                            >
                                                {zona.nombre}
                                            </option>
                                        ))
                                    }
                                </Select>
                            </div>

                            <div className='flex flex-row gap-3 my-10'>
                                <TextInput
                                    required
                                    addon="comision_general"
                                    className='basis-2/6'
                                    type={'number'}
                                    {...register('comision_general')}
                                />
                                <TextInput
                                    required
                                    addon="comision_supervision"
                                    type={'number'}
                                    className="basis-2/6"
                                    {...register('comision_supervision')}
                                />

                                <TextInput
                                    required
                                    addon="comision_pale"
                                    type={'number'}
                                    className="basis-2/6"
                                    {...register('comision_pale')}
                                />
                            </div>

                            <div className='flex flex-row gap-3'>
                                <TextInput
                                    required
                                    addon="comision_super_pale"
                                    className='basis-2/6'
                                    type={'number'}
                                    {...register('comision_super_pale')}
                                />
                                <TextInput
                                    required
                                    addon="comision_quiniela"
                                    type={'number'}
                                    className="basis-2/6"
                                    {...register('comision_quiniela')}
                                />

                                <TextInput
                                    required
                                    addon="comision_tripleta"
                                    type={'number'}
                                    className="basis-2/6"
                                    {...register('comision_tripleta')}
                                />
                            </div>


                            <div className="flex gap-2" >
                                {
                                    getAllLoteries.data?.map(loteria => (
                                        <div key={loteria.id} className='py-2' >
                                    <Checkbox
                                        id={loteria.id.toString()}
                                        defaultChecked={ false }
                                        className='mx-2'
                                        value={loteria.id}
                                        { ...register('loterias') }
                                        />
                                    <Label className='text-2xl' >
                                        { loteria.nombre }
                                    </Label>

                                    </div>
                                    ))
                                }
                            </div>

                            <div className="w-full flex place-content-center mt-20" >
                                <Button
                                    style={{ fontWeight: 'bold', fontSize: 30 }}
                                    type="submit"
                                    size={'xl'}
                                    className="w-30 text-3xl">
                                    Crear Vendendor
                                </Button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer>
                   
                </Modal.Footer> */}
            </Modal>

            <Toaster/>
        </>
    )
}
