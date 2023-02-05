import { useState } from 'react';
import { Button } from "flowbite-react";
import { TableVendedores } from "../components/Vendedores/TableVendedores";
import { CreateVendedores } from '../components/Vendedores/CreateVendedores';

export const Vendedores = () => {

    const [openAdd, setopenAdd] = useState(false)


    return (
        <div className="w-full">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl dark:text-white">VENDEDORES</h1>
                <Button onClick={() => setopenAdd(!openAdd)}>
                    Crear Vendedor
                </Button>
            </div>
            <TableVendedores />
            <CreateVendedores   
                visible={ openAdd }
                onClose={ (event) => setopenAdd(!openAdd) }
                />
        </div>
    )
}
