import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthContext } from "../hooks/useContext"

export const GlobalPrivateRoute = () => {

    const { stateAuth:{ user } } = useAuthContext()

    switch (user?.role_id) {
        case 1:
            <Navigate to={'/superadmin'} />
            break
        default:
            break;
    }

}
