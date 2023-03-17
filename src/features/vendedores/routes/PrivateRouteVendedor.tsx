import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../../hooks/useContext"
import { IsLoadingComponent } from "../../../components/isLoading"

export const PrivateRouteVendedor = () => {
    const { stateAuth } = useAuthContext()

    switch (stateAuth.status) {
        case 'autenticated':
            // if(stateAuth.user?.role_id != 1) 
            //     return  <Navigate to={'/auth'} /> 
            return <Outlet/>
        
        case 'loading' :
            return <IsLoadingComponent/>

        case 'not-autenticated' :
            return <Navigate to={'/auth'} /> 
    }
}
