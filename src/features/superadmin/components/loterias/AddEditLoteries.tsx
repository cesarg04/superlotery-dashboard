import { FC } from 'react';
import { Button, Checkbox, Label, Modal, TextInput, ToggleSwitch } from "flowbite-react"
import { BsCalendarDate } from 'react-icons/bs';
import { BiMoney } from 'react-icons/bi';
import { useAddEditLoteries } from '../../hooks/useAddEditLoteries';

interface Props {
    visible: boolean,
    onClose: (event: boolean) => any;
    mode?: 'add' | 'edit'
}

export const AddLoteries: FC<Props> = ({ visible, onClose }) => {

    const { register,
        handleSubmit,
        watch,
        setError,
        errors,
        onSubmit,
        statusLotery,
        setStatusLotery,
        aperturaSecuencial,
        setAperturaSecuencial,
        cierreSecuencuial,
        setCierreSecuencuial } = useAddEditLoteries()


    const onClick = () => {
        onClose(!visible)
    }



    return (
        <Modal
            show={visible}
            size="6xl"
            onClose={onClick}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header>
                    CREAR LOTERIA
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 p-6 max-h-96 overflow-auto">


                        <div className='flex flex-row gap-3'>
                            <TextInput
                                required
                                addon="Nombre"
                                className='basis-2/4'
                                {...register('nombre')} />
                            <TextInput
                                required
                                addon="Abreviatura"
                                {...register('abreviatura')} />
                            <ToggleSwitch
                                checked={statusLotery}
                                label='Activo'
                                className='grow-o'
                                onChange={() => setStatusLotery(!statusLotery)} />
                        </div>

                        <div className='my-5 flex justify-between'>
                            <div className='flex'>
                                <BsCalendarDate className='text-xl mt-1 mx-2' />
                                <h1 className='text-xl'>Horario de inicio</h1>
                            </div>
                            <div>
                                <Checkbox
                                    id="accept"
                                    defaultChecked={aperturaSecuencial}
                                    onChange={() => setAperturaSecuencial(!aperturaSecuencial)}
                                />
                                <Label htmlFor="accept" className='mx-2'>
                                    Poner la hora del lunes a las demas fechas
                                </Label>
                            </div>

                        </div>
                        <div className='flex flex-row flex-wrap gap-4 justify-between'>

                            <TextInput
                                addon="Lunes"
                                required
                                type={'time'}
                                className='basis-1/4'
                                {...register('apertura_lunes')} />

                            <TextInput
                                addon="Martes"
                                required={aperturaSecuencial ? false : true}
                                type={'time'}
                                className='basis-1/4'
                                {...register('apertura_martes')} />

                            <TextInput
                                addon="Miercoles"
                                required={aperturaSecuencial ? false : true}
                                type={'time'}
                                className='basis-1/4'
                                {...register('apertura_miercoles')} />

                            <TextInput
                                addon="Jueves"
                                required={aperturaSecuencial ? false : true}
                                type={'time'}
                                className='basis-5/12'
                                {...register('apertura_jueves')} />

                            <TextInput
                                addon="Viernes"
                                required={aperturaSecuencial ? false : true}
                                type={'time'}
                                className='basis-5/12'
                                {...register('apertura_viernes')} />

                            <TextInput
                                addon="Sabado"
                                required={aperturaSecuencial ? false : true}
                                type={'time'}
                                className='basis-5/12'
                                {...register('apertura_sabado')} />

                            <TextInput
                                addon="Domingo"
                                required={aperturaSecuencial ? false : true}
                                type={'time'}
                                className='basis-5/12'
                                {...register('apertura_domingo')} />

                        </div>

                        <div className='my-5 flex justify-between'>
                            <div className='flex'>
                                <BsCalendarDate className='text-xl mt-1 mx-2' />
                                <h1 className='text-xl'>Horario de cierre</h1>
                            </div>
                            <div>
                                <Checkbox
                                    id="accept"
                                    defaultChecked={cierreSecuencuial}
                                    onChange={() => setCierreSecuencuial(!cierreSecuencuial)}
                                />
                                <Label htmlFor="accept" className='mx-2'>
                                    Poner la hora del lunes a las demas fechas
                                </Label>
                            </div>

                        </div>
                        <div className='flex flex-row flex-wrap gap-4 justify-between'>

                            <TextInput
                                addon="Lunes"
                                required
                                type={'time'}
                                className='basis-1/4' />

                            <TextInput
                                addon="Martes"
                                required={cierreSecuencuial ? false : true}
                                type={'time'}
                                className='basis-1/4' />

                            <TextInput
                                addon="Miercoles"
                                required={cierreSecuencuial ? false : true}
                                type={'time'}
                                className='basis-1/4' />

                            <TextInput
                                addon="Jueves"
                                required={cierreSecuencuial ? false : true}
                                type={'time'}
                                className='basis-5/12' />

                            <TextInput
                                addon="Viernes"
                                required={cierreSecuencuial ? false : true}
                                type={'time'}
                                className='basis-5/12' />

                            <TextInput
                                addon="Sabado"
                                required={cierreSecuencuial ? false : true}
                                type={'time'}
                                className='basis-5/12' />

                            <TextInput
                                addon="Domingo"
                                required={cierreSecuencuial ? false : true}
                                type={'time'}
                                className='basis-5/12' />

                        </div>

                        <div className='my-5 flex justify-between'>
                            <div className='flex'>
                                <BiMoney className='text-xl mt-1 mx-2' />
                                <h1 className='text-xl'>Premios</h1>
                            </div>

                        </div>


                        {/* <div className='flex flex-col'>

                            <div className='grid grid-cols-4 gap-4 justify-between my-2' >

                                <div className='' >
                                    <h3 className='text-xl' >Quinielas</h3>
                                </div>

                                <TextInput
                                    required
                                    addon="Primera"
                                    type={'number'}
                                />

                                <TextInput
                                    required
                                    addon="Segunda"
                                    type={'number'}
                                />

                                <TextInput
                                    required
                                    addon="Tercera"
                                    type={'number'}
                                />

                            </div>

                            <div className='grid grid-cols-4 gap-4 my-2' >

                                <div className='basis-1/12' >
                                    <h3 className='text-xl' >Pale</h3>
                                </div>

                                <TextInput
                                    required
                                    addon="Primera"
                                    type={'number'}
                                />

                                <TextInput
                                    required
                                    addon="Segunda"
                                    type={'number'}
                                />


                            </div>

                            <div className='grid grid-cols-4 gap-4 my-2' >

                                <div className='basis-12' >
                                    <h3 className='text-xl' >Tripleta</h3>
                                </div>

                                <TextInput
                                    required
                                    addon="Primera"
                                    type={'number'}
                                />

                                <TextInput
                                    required
                                    addon="Segunda"
                                    type={'number'}
                                />

                            </div>

                            <div className='grid grid-cols-4 gap-4 my-2' >

                                <div className='basis-12' >
                                    <h3 className='text-xl' >Superpale</h3>
                                </div>

                                <TextInput
                                    required
                                    addon="Primera"
                                    type={'number'}
                                />
                            </div>

                        </div> */}

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type='submit'
                    // onClick={onClick}
                    >
                        I accept
                    </Button>
                    <Button
                        color="gray"
                        onClick={onClick}
                    >
                        Decline
                    </Button>
                </Modal.Footer>

            </form>
        </Modal>
    )
}
