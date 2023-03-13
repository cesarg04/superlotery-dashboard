import { Badge, Card } from "flowbite-react"
import { useTranslation } from "react-i18next"

const primeStyles = "rounded-full bg-slate-400 px-3 py-2 font-semibold text-white"


export const LoteryResultsViewer = () => {

    const { t, i18n } = useTranslation('global')



    return (
        <Card className="w-6/12 px-10 justify-start">
            <h1 className="font-semibold text-xl text-secondary-home " >{t('global.lotery.lotery_day')}</h1>
            <div className="border-b flex gap-5 justify-between py-2" >
                <div className="w-28" >
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className=" " >

                    <div>
                        <h2 className="text-xl font-semibold text-secondary-home" >Loteka</h2>
                    </div>
                    <div className="flex content-center items-center gap-3" >
                        <div className={primeStyles} >
                            24
                        </div>
                        <div className={primeStyles} >
                            98
                        </div>

                        <div className={primeStyles} >
                            10
                        </div>

                    </div>
                </div>

                <div>
                    <Badge color="info"
                        className="text-xl">
                        22/12/2023
                    </Badge>
                </div>
            </div>
        </Card>
    )
}
