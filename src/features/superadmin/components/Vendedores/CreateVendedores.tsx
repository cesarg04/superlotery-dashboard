import { Button, Modal, Select, TextInput } from "flowbite-react";
import { FC } from "react";
import { useAddVendedor } from "../../hooks/useAddVendedor";

interface Props {
    visible: boolean;
    onClose: (event: boolean) => void;

}

export const CreateVendedores: FC<Props> = ({ visible, onClose }) => {

    const { zonasQuery } = useAddVendedor()

    const onCl = () => {
        onClose(!visible)
    }

    return (
        <Modal
            show={visible}
            size="6xl"
            onClose={onCl}
        >
            <Modal.Header className="px-10" >
                Crear vendedor
            </Modal.Header>
            <Modal.Body>
                <form action="">
                    <div className="space-y-6 p-6 max-h-96 overflow-auto">

                        <div className='flex flex-row gap-3'>
                            <TextInput
                                required
                                addon="Nombre"
                                className='basis-2/6'
                                type={'text'}
                            // {...register('loteria.nombre')} 
                            />
                            <TextInput
                                required
                                addon="Apellidos"
                                type={'text'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />

                            <TextInput
                                required
                                addon="Cedula"
                                type={'text'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />
                        </div>

                        <div className='flex flex-row gap-3'>
                            <TextInput
                                required
                                addon="Usuario"
                                className='basis-2/6'
                                type={'text'}
                            // {...register('loteria.nombre')} 
                            />
                            <TextInput
                                required
                                addon="Correo"
                                type={'email'}
                                name="email"
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />

                            <TextInput
                                required
                                addon="Contraseña"
                                type={'password'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />
                        </div>

                        <div className='flex flex-row gap-3'>
                            <TextInput
                                required
                                addon="Direccion"
                                className='basis-2/6'
                                type={'text'}
                            // {...register('loteria.nombre')} 
                            />

                            <TextInput
                                required
                                addon="Telefono"
                                className='basis-2/6'
                                type={'tel'}
                            // {...register('loteria.nombre')} 
                            />

                            <Select
                                required
                                addon="Zona"
                                className="basis-2/6"
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
                                name="user"
                                className='basis-2/6'
                                type={'number'}
                            // {...register('loteria.nombre')} 
                            />
                            <TextInput
                                required
                                addon="comision_supervision"
                                type={'number'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />

                            <TextInput
                                required
                                addon="comision_pale"
                                type={'number'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />
                        </div>

                        <div className='flex flex-row gap-3'>
                            <TextInput
                                required
                                addon="comision_super_pale"
                                name="user"
                                className='basis-2/6'
                                type={'number'}
                            // {...register('loteria.nombre')} 
                            />
                            <TextInput
                                required
                                addon="comision_quiniela"
                                type={'number'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />

                            <TextInput
                                required
                                addon="comision_tripleta"
                                type={'number'}
                                className="basis-2/6"
                            // {...register('loteria.abreviatura')} 
                            />
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
            <Modal.Footer>
                {/*  */}
            </Modal.Footer>
        </Modal>
    )
}
