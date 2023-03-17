import { Route, Routes } from "react-router-dom"
import { VendedoresLayout } from "../VendedoresLayout"
import { Home } from "../pages/Home"
import { PrivateRouteVendedor } from "./PrivateRouteVendedor"

export const VendedoresRoute = () => {
  return (
    <Routes>
      <Route path="/"  element={ <PrivateRouteVendedor/> } >
        <Route path="/" element={ <VendedoresLayout/> } >
          <Route path="/"  element={ <Home/> } />
        </Route>

      </Route>
    </Routes>
  )
}
