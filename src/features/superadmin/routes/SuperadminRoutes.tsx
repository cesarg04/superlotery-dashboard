
import { Navigate, Route, Routes } from "react-router-dom"
import { Home, Sucursales, Zonas } from "../pages"
import { SuperadminLayout } from "../SuperadminLayout"
import { PrivateRoute } from "./PrivateRoute"


export const SuperadminRoutes = () => {
    return (
        <Routes>
            <Route path="/"  element={ <PrivateRoute/> } >
                <Route path="/" element={<SuperadminLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="sucursales" element={<Sucursales />} />
                    <Route path="zonas" element={<Zonas />} />
                    <Route path="/*" element={<Navigate to={'/superadmin'} />} />
                </Route>

            </Route>
        </Routes>
    )
}
