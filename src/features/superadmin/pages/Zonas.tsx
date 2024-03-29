import { Button } from "flowbite-react"
import { FC, useState } from "react"
import { TableZonas } from "../components/zonas/TableZonas"
import { CreateZona } from "../components/zonas/CreateZona"


export const Zonas: FC = () => {

    const [createZonaOpen, setcreateZonaOpen] = useState<boolean>(false);

    return (
        <div className="w-full">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl dark:text-white">ZONAS</h1>
                <Button onClick={() => setcreateZonaOpen(!createZonaOpen)}>
                    Crear Zona
                </Button>
            </div>
            <TableZonas />

            <CreateZona
                mode="add"
                visible={createZonaOpen}
                onClose={(event: boolean) => setcreateZonaOpen(event)} />


        </div>
    )
}
