import { LoteryResultsViewer } from "../../../components/LoteryResultsViewer"
import { Lotery } from "../../superadmin/components"
import { DailySales } from "../components/DailySales"
import { HomeDataShow } from "../components/HomeDataShow"
import { ResumenDia } from "../components/ResumeData"

export const Home = () => {



    return (

        <div className="container">

            <HomeDataShow />

            <div className="flex mt-10 gap-10" >

                <ResumenDia />
                <LoteryResultsViewer/>
            </div>
            <div className="w-full" >
            <DailySales/>

            </div>

        </div>
    )
}
