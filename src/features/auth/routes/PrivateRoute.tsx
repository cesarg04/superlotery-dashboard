import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useContext"
import { IsLoadingComponent } from "../../../components/isLoading";

export const PrivateRoute = () => {
    
    const { stateAuth } = useAuthContext()

    switch (stateAuth.status) {
        case 'autenticated':
            return <Navigate to={'/superadmin'} />
            
        case 'loading':
            return <IsLoadingComponent/>

        case 'not-autenticated':
            return <Outlet/>
    }

}
