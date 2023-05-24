import { Button } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { NavbarSellers } from "./components/NavbarSellers"
import { Outlet } from "react-router-dom"
import { JugadasProvider } from "./context/JugadasContetx"

export const VendedoresLayout = () => {

  

  return (
    <JugadasProvider>
    <div className="w-full h-screen dark:bg-dark px-5 pt-3 " >
      <NavbarSellers />
      <div className="mt-5" >
        <Outlet />
      </div>
    </div>
    </JugadasProvider>

  )
}
