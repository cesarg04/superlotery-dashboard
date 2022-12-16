import { Spinner } from "flowbite-react"


export const IsLoadingComponent = () => {
  return (
    <div className="fixed inset-0 
    bg-black bg-opacity-30 
    backdrop-blur-sm flex 
    justify-center items-center">
        <Spinner
        size={'xl'}/>
    </div>

  )
}
