import { Route, Routes } from "react-router-dom"
import { SucursalesLayout } from "../SucursalesLayout"
import { Home } from "../pages/Home"
import { Vendedores } from "../pages/Vendedores"

export const SucursalesRoutes = () => {
  return (

    <Routes>
        <Route path="/" element={ <SucursalesLayout/> } >
          <Route path="/" element={ <Home/> } />
          <Route path="vendedores" element={ <Vendedores/> } />
        </Route>
    </Routes>

  )
}
