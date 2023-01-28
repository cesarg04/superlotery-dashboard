import { Button } from "flowbite-react"
import { CreateSucursal, TableSucursales } from "../components"
import { useState } from "react"

export const Sucursales = () => {
    

  const [openCreateSucursal, setopenCreateSucursal] = useState<boolean>(false)

  return (
    <div className="w-full">
    <div className="flex justify-between mb-4">
        <h1 className="text-3xl dark:text-white">SUCURSALES</h1>
        <Button onClick={ () => setopenCreateSucursal(!openCreateSucursal) }>
            Crear Sucursal
        </Button>
    </div>

    <TableSucursales/>

    <CreateSucursal 
      visible={openCreateSucursal} 
      onClose={ (event) => setopenCreateSucursal(event)}
      mode="add" />



</div>
  )
}
