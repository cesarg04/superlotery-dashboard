import { Badge, Card } from "flowbite-react"
import { FC } from "react"

interface Props {
    loteryName: string
    numerosGanadores: string[]
    date: string,
    imgUrl?: string
}

export const Lotery: FC<Props> = ({ loteryName, numerosGanadores, date, imgUrl }) => {
    return (
        <div className="border-y py-2 ">
            <div className="flex flex-row gap-5 h-full justify-between">
                <div className="w-20 h-full flex content-center">
                    <img className="h-20 w-20" src={imgUrl} alt="" />
                </div>
                <div>
                    <span className="font-semibold text-2xl dark:text-white text-center">{loteryName}</span>
                    <div className="flex gap-3">
                        {
                            numerosGanadores.map(num => (
                                <div className="numbers">
                                    {num}
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div>
                    <Badge color="success">
                        {date}
                    </Badge>
                </div>

            </div>
        </div>
    )

}

