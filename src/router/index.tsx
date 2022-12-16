import { createBrowserRouter } from "react-router-dom";
import { SuperadminLayout } from "../features/superadmin/SuperadminLayout";
import SuperadminRoutes from "../features/superadmin/routes/SuperadminRoutes";
import { Sucursales } from "../features/superadmin/pages/Sucursales";

export const router = createBrowserRouter([
  {
    path: '/superadmin',
    element: <SuperadminLayout/>,
    ...SuperadminRoutes

  }
])