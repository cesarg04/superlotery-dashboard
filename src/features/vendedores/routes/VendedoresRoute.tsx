import { Route, Routes } from "react-router-dom"
import { VendedoresLayout } from "../VendedoresLayout"

export const VendedoresRoute = () => {
  return (
    <Routes>
        <Route path="/" element={ <VendedoresLayout/> } >
        </Route>
    </Routes>
  )
}
