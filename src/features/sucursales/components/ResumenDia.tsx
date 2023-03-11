import { FaMoneyBill } from "react-icons/fa"

export const ResumenDia = () => {
    return (
        <div className="w-6/12 shadow mt-10 px-4" >

            <h2 className="text-xl font-bold text-gray-600 dark:text-gray-400 py-3" >Resumen del dia</h2>

            <div className="w-full grid grid-cols-2 grid-rows-2 " >

                <div className="box-ventas-dia" >
                    <div className="w-1/3 bg-blue-500 rounded-lg flex items-center justify-center text-3xl text-white" >
                        <FaMoneyBill />
                    </div>
                    <div className="flex flex-col px-2 justify-center items-center dark:text-gray-400 " >
                        <h1 className="text-xl" >VENTAS</h1>
                        <h2 className="font-semibold" >$ 2,500.00</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
