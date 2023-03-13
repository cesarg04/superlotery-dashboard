import React from "react"
import { IconType } from "react-icons/lib"


interface Props {
    Icon: IconType,
    message: string;
    color: string,
    mount: string
}
export const CardChildrenResumen: React.FC<Props> = ({ Icon, message, color, mount }) => {
    return (
        <div className="box-ventas-dia" >
            <div className={`w-1/3 ${color} rounded-l-lg flex items-center justify-center text-3xl text-white`} >
                <Icon />
            </div>
            <div className="flex flex-col px-2 justify-center items-center dark:text-gray-400 " >
                <h1 className="text-xl text-secondary-home" >{message}</h1>
                <h2 className="font-semibold text-secondary-home " >$ {mount}</h2>
            </div>
        </div>
    )
}
