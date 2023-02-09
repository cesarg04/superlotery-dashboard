import { Button } from "flowbite-react"

export const PublicarSorteos = () => {
  return (
    <div className="w-full">
    <div className="flex justify-between mb-4">
      <h1 className="text-3xl dark:text-white">PUBLICAR SORTEOS</h1>
      <Button onClick={ () => console.log('he;;p') }>
          Crear Loteria
      </Button>
    </div>

  </div>
  )
}
