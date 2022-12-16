
import { Card } from "flowbite-react"
import { useSucursales } from "../hooks/useSucursales"
import { IsLoadingComponent } from "../../../components/isLoading"


export const Home = () => {

    const { getAllSucursales } = useSucursales()


    return (
        <div className="flex justify-center md:justify-start">
            <Card className="w-9/12 md:w-1/4 md:w-30">
                <h1 className="font-semibold text-xl">Zonas</h1>
                <h2>258</h2>
            </Card>
        </div>
    )
}
