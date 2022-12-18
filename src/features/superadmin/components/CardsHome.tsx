import { Card } from "flowbite-react"
import { ComponentProps, FC } from "react";

interface Props{
    title: string
    content: string
    Logo: FC<ComponentProps<'svg'>>;
    color?: string
}

export const CardsHome:FC<Props> = ({Logo, title, content, color}) => {
    return (
        <Card className="w-9/12 md:w-3/6 dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="flex flex-row gap-4 w-full justify-between">
                <div>
                    <h1 className={`font-bold text-xl font-title text-${color}`}>{ title }</h1>
                    <h2 className="font-content text-xl font-semibold text-gray-400">{ content }</h2>
                </div>
                <div>
                    <Logo className={`text-${color} text-6xl`}/>
                </div>

            </div>
        </Card>
    )
}
