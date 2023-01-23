import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"


export const useAuthContext = () => {

        const AuthState = useContext(AuthContext)


        return{ 
            ...AuthState
        }
}



