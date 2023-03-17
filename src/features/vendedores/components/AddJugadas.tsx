import { Button, Select, TextInput } from "flowbite-react"
import { useJugadas } from "../hooks/useJugadas"
import { Toaster } from "react-hot-toast";


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
        onChangeJugadas
    } = useJugadas();


    return (
        <form action="" onSubmit={handleSubmit(onSubmit)} >

            <div className="w-full flex gap-10 mt-5" >

                <Select
                    addon={t('sellers.lotery')}
                    style={{ width: 200 }}
                    {...register('loteria_id')}
                >
                    {
                        getAllLoteries.data?.map(lotery => (
                            <option
                                key={lotery.id}
                                value={lotery.id} >
                                {lotery.nombre}
                            </option>
                        ))
                    }
                </Select>
                <Select
                    addon={t('sellers.combination')}
                    style={{ width: 150 }}
                    {...register('combinacion_id')}
                >
                    {
                        getAllCombinaciones.data?.map(comb => (
                            <option
                                key={comb.id}
                                value={comb.id} >
                                {comb.nombre}
                            </option>
                        ))
                    }
                </Select>
                <TextInput 
                    type="number"
                    addon={t('sellers.amount')}
                    required
                />

                <TextInput
                    type="number"
                    addon={t('sellers.numbers')}
                    required
                    value={ jugadas }
                    // { ...register('numeros') }
                        onChange={ (event) => onChangeJugadas(event.target.value) }
                />

                <Button
                    type="submit"
                >
                    Crear
                </Button>

            </div>

            <Toaster/>
        </form>
    )
}
