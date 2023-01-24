import { useState } from 'react'
import { Button } from "flowbite-react"
import { TableLoterias } from "../components/loterias/TableLoterias"
import { AddLoteries } from "../components"

export const Loterias = () => {

  const [openModal, setopenModal] = useState(false)

  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl dark:text-white">LOTERIAS</h1>
        <Button onClick={ () => setopenModal(!openModal) }>
            Crear Loteria
        </Button>
      </div>

        <TableLoterias/>

        <AddLoteries visible={ openModal } onClose={(event) => setopenModal(event)} />
    </div>
  )
}
