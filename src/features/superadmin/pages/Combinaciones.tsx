import { useState } from 'react'
import { Button } from "flowbite-react"
import { ViewCombinaciones } from '../components/combinaciones/ViewCombinaciones'
import { useAuthContext } from '../../../hooks/useContext';
import { useCombinaciones } from '../hooks/useCombinaciones';
import { CreateCombinaciones } from '../components/combinaciones/CreateCombinaciones';
import { Toaster } from 'react-hot-toast';


export const Combinaciones = () => {

    const [openModal, setOpenModal] = useState(false);
    const { stateAuth } = useAuthContext()

    const { getAllCombinaciones } = useCombinaciones(stateAuth.token!)

    return (
        <>
            <div className="w-full">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <h1 className="text-3xl dark:text-white">COMBINACIONES</h1>
                    <Button onClick={() => setOpenModal(!openModal)}>
                        Crear Combinacion
                    </Button>
                </div>

                <div className='flex flex-col md:flex-row justify-between flex-wrap mt-20 gap-5' >
                    {
                        getAllCombinaciones.data?.map( comb => (
                            <ViewCombinaciones  combinacion={comb} />
                        ) )
                    }
                </div>


            </div>
            <CreateCombinaciones 
                visible={openModal}
                onClose={ (val: boolean) => setOpenModal(val) } />

            <Toaster/>
        </>
    )
}
