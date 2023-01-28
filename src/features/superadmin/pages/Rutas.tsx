import { Button } from "flowbite-react"
import { TableRutas } from "../components/rutas/TableRutas"

export const Rutas = () => {
  return (
    <div className="w-full">
    <div className="flex justify-between mb-4">
      <h1 className="text-3xl dark:text-white">LOTERIAS</h1>
      <Button onClick={ () => console.log('he;;p') }>
          Crear Loteria
      </Button>
    </div>

    <TableRutas/>

  </div>
  )
}
