import { Navigate, Outlet } from "react-router-dom"
import { IsLoadingComponent } from "../../../components/isLoading";
import { useAuthContext } from "../../../hooks/useContext";

interface Props{

}

export const PrivateRoute = (props: any) => {

    const { stateAuth } = useAuthContext()

    switch (stateAuth.status) {
        case 'autenticated':
            return <Outlet/>
        
        case 'loading' :
            return <IsLoadingComponent/>

        case 'not-autenticated' :
            return <Navigate to={'/auth'} /> 
    }
    
}


