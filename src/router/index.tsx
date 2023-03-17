import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../features/auth/AuthLayout";
import { SuperadminRoutes } from "../features/superadmin/routes/SuperadminRoutes";
import { AuthRoutes } from "../features/auth/routes";
import { VendedoresRoute } from "../features/vendedores/routes/VendedoresRoute";
import { SucursalesRoutes } from "../features/sucursales/routes/SucursalesRoutes";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/superadmin/*"
        element={
          <SuperadminRoutes />
        } />
      <Route path="/auth/*"
        element={<AuthRoutes />} />

      <Route path="/vendedores/*"
        element={ <VendedoresRoute/> } />

      <Route path="/sucursal/*" element={ <SucursalesRoutes/> } />

    </Routes>
  )
}
