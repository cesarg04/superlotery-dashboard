import { Button, Select, TextInput } from "flowbite-react"
import { useJugadas } from "../hooks/useJugadas"
import { Toaster } from "react-hot-toast";
import { PaleoSuper } from "./PaleoSuper";
import { SelectLoteria } from "./SelectLoteria";
import { useState } from "react";


export const AddJugadas = () => {

    const {
        register,
        watch,
        onSubmit,
        handleSubmit,
        getAllCombinaciones,
        getAllLoteries,
        t,
        setJugadas,
        jugadas,
        onChangeJugadas,
        visbleSelectMode,
        setVisbleSelectMode,
        seleccionLoteria, 
        setSeleccionLoteria,

    } = useJugadas();


    return (
        <>
            <form className="" action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="flex  gap-5 mt-5 mb-5 " >
                    <Select
                        addon={t('sellers.lotery')}
                        // style={{ width: 200 }}
                        {...register('loteria_id')}
                        className="w-5/12"
                        required
                    >
                        <option selected disabled >
                            Seleccionar
                        </option>
                        {
                            getAllLoteries.data?.map(lotery => (
                                <option
                                    key={lotery.id}
                                    value={lotery.id} >
                                    {
                                        `${lotery.id} - ${lotery.nombre}`
                                    }
                                </option>
                            ))
                        }
                    </Select>

                    <TextInput
                        type="number"
                        addon={t('sellers.amount')}
                        className="w-5/12"
                        {...register('monto')}
                        required
                    />

                    <TextInput
                        type="number"
                        addon={t('sellers.numbers')}
                        className="w-5/12"
                        required
                        value={jugadas}
                        // { ...register('numeros') }
                        onChange={(event) => onChangeJugadas(event.target.value)}
                    />

                    <Button
                        type="submit"
                        className="w-48 font-semibold "

                    >
                        Crear
                    </Button>

                </div>

                <Toaster />
            </form>

            <PaleoSuper 
                visible={ visbleSelectMode }
                onClose={ (val) => setVisbleSelectMode(val)}
                // idJugada={idJudata}
            />
            <SelectLoteria
                visible={ seleccionLoteria }
                onClose={ (val) => setSeleccionLoteria(val) }
            />
        </>
    )
}
