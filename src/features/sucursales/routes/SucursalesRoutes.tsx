import { Route, Routes } from "react-router-dom"
import { SucursalesLayout } from "../SucursalesLayout"

export const SucursalesRoutes = () => {
  return (

    <Routes>
        <Route path="/" element={ <SucursalesLayout/> } >

        </Route>
    </Routes>

  )
}
