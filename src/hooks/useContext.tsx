import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"
import { baseApI } from '../api/apiSettings'


export const useAuthContext = () => {

        const AuthState = useContext(AuthContext)

        return{ 
            ...AuthState
        }
}



