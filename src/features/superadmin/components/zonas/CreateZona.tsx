import { Button, Label, Modal, Select, Spinner, TextInput, ToggleSwitch } from "flowbite-react"
import { FC } from "react"
import { useAddEditZonas } from "../../hooks/useAddZonas"
import { Toaster } from "react-hot-toast"


interface Props {
    visible: boolean
    onClose: (event: boolean) => any
    mode: 'add' | 'edit'
    nombre?: string
    pais?: string
    provincia?: string
    limite?: string
    tipo?: string
    sucursal?: string

}

export const CreateZona: FC<Props> = (props) => {

    const { register,
        handleSubmit,
        errors,
        reset,
        onSubmit,
        getAllSucursales,
        mutation } = useAddEditZonas();

    const onClick = () => {
        props.onClose(!props.visible)
    }

    const onChange = () => {

    }

    return (
        <Modal
            show={props.visible}
            size="lg"
            onClose={onClick}>
            <Modal.Header>
                {
                    props.mode === 'add' ? 'Crear zona' : 'Editar zona'
                }

            </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Modal.Body className="">

                    <div className="space-y-6">
                        <div className="w-full flex justify-between gap-4">

                            <TextInput
                                placeholder="Nombre"
                                required
                                className="w-3/6"
                                {...register('nombre')}
                                defaultValue={props.nombre}
                            />

                            <TextInput
                                placeholder="Pais"
                                required
                                className="w-3/6"
                                {...register('pais')}
                                defaultValue={props.pais} />

                        </div>

                        <div className="flex justify-between gap-4">
                            <TextInput
                                placeholder="Provincia"
                                required
                                className="w-3/6"
                                {...register('provincia')}
                                defaultValue={props.provincia} />

                            <TextInput
                                placeholder="Limite"
                                type={'number'}
                                required
                                className="w-3/6"
                                {...register('limites')}
                                defaultValue={props.limite} />

                        </div>

                        <div className="flex justify-between gap-4">

                            <div
                                className="w-3/6"
                                id="select">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="peso"
                                        value="Seleccione el tipo de moneda"
                                    />
                                </div>
                                <Select
                                    {...register('tipo_moneda')}
                                    id="peso"
                                    required={true}
                                    defaultValue={props.tipo}
                                >
                                    <option>
                                        USD
                                    </option>
                                    <option>
                                        DOP
                                    </option>
                                    <option>
                                        HTG
                                    </option>
                                </Select>
                            </div>
                            <div id="select" className="w-3/6">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="sucursal"
                                        value="Seleccione la sucursal"
                                    />
                                </div>
                                <Select
                                    id="sucursal"
                                    required={true}
                                    defaultValue={props.sucursal}
                                    {...register('sucursal_id')}

                                >
                                    {
                                        getAllSucursales.data?.map((suc) => (
                                            <option
                                                value={suc.id}
                                                key={suc.id} >
                                                {suc.nombre}
                                            </option>

                                        ))
                                    }
                                </Select>
                            </div>
                        </div>

                    </div>


                </Modal.Body>
                <Modal.Footer className="justify-center">
                    {
                        props.mode === 'add' ?
                            <Button
                                type='submit'
                                className='w-3/6 font-bold text-3xl'
                                disabled={mutation.isLoading}>
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
                                disabled={mutation.isLoading}>
                                {
                                    mutation.isLoading && <div className="mr-3">
                                        <Spinner
                                            size="sm"
                                            light={true}
                                        />
                                    </div>
                                }
                                Guardar Cambios
                            </Button>

                    }

                </Modal.Footer>

            </form>
        </Modal>
    )
}
