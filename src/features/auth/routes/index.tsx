import { Navigate, Route, Routes } from "react-router-dom"
import { AuthLayout } from "../AuthLayout"
import { LoginPage } from "../pages/Login"

export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to={'/auth'} />} />
            </Route>
        </Routes>
    )
}
