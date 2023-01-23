import { useAuthContext } from "../../../hooks/useContext"

export const PrivateRoute = () => {
    
    const { stateAuth } = useAuthContext()

    switch (stateAuth.status) {
        case 'autenticated':
            
            break;
    
        default:
            break;
    }


}
