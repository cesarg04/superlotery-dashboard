import { Button, Label, Modal, Select, Spinner, TextInput } from "flowbite-react"
import { FC } from "react"
import { useAddEditZonas } from "../../hooks/useAddEditZonas"
import { Toaster } from "react-hot-toast"


interface Props {
    visible: boolean
    onClose: (event: boolean) => any

}

export const CreateZona: FC<Props> = ({ visible, onClose }) => {

    const { register,
        handleSubmit,
        errors,
        reset,
        onSubmit,
        getAllSucursales,
        mutation } = useAddEditZonas();

    const onClick = () => {
        onClose(!visible)
    }



    return (
        <Modal
            show={visible}
            size="lg"
            onClose={onClick}>
            <Modal.Header>
                Crear zona
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
                            />

                            <TextInput
                                placeholder="Pais"
                                required
                                className="w-3/6"
                                {...register('pais')} />

                        </div>

                        <div className="flex justify-between gap-4">
                            <TextInput
                                placeholder="Provincia"
                                required
                                className="w-3/6"
                                {...register('provincia')} />


                            <TextInput
                                placeholder="Limite"
                                type={'number'}
                                required
                                className="w-3/6"
                                {...register('limites')} />

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
                                    defaultValue={'Seleccione una sucursal'}
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
                    <Button
                        type='submit'
                        className='w-3/6 font-bold text-3xl'
                        disabled={ mutation.isLoading }>
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


                        <Toaster/>
        </Modal>
    )
}
