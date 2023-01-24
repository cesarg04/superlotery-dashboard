import { Navigate, Route, Routes } from "react-router-dom"
import { AuthLayout } from "../AuthLayout"
import { LoginPage } from "../pages/Login"
import { PrivateRoute } from "./PrivateRoute"

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={ <PrivateRoute/> }>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to={'/auth'} />} />
                </Route>

            </Route>
        </Routes>
    )
}
