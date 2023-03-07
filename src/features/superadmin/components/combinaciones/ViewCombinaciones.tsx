
import { Card } from "flowbite-react"
import { Combinaciones } from "../../interfaces"
import { DropdownOptioonsComb } from "./DropdownOptioonsComb"

interface Props {
    combinacion: Combinaciones
}

export const ViewCombinaciones: React.FC<Props> = ({ combinacion }) => {
    return (
        <Card className="dark:text-white grid content-center text-center my-10 cursor-pointer" >
            <h1 className="text-xl color" >{combinacion.nombre}</h1>
            <h3>Monto en primera: {`$${combinacion.monto_primera}`} </h3>
            <h3>Monto en tercera: {`$${combinacion.monto_segunda}`} </h3>
            <h3>Monto en tercera: {`$${combinacion.monto_tercera}`} </h3>
            <div className="w-full flex justify-center" >
                <DropdownOptioonsComb combinacion={ combinacion } />
            </div>
        </Card>
    )
}
