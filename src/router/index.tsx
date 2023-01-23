import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../features/auth/AuthLayout";
import { SuperadminRoutes } from "../features/superadmin/routes/SuperadminRoutes";
import { AuthRoutes } from "../features/auth/routes";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/superadmin/*"
        element={
          <SuperadminRoutes />
        } />
      <Route path="/auth/*"
        element={<AuthRoutes />} />

    </Routes>
  )
}
