import { FC, createContext, useEffect, useReducer, useState } from 'react';
import { LoginSuperadmin, Status, User } from '../features/auth/interfaces';
import { baseApI } from '../api/apiSettings';
import { AuthReducer } from './AuthReducer';

interface Contextprops {
    stateAuth: AuthStateInterface;
    signIn: (data: LoginSuperadmin) => void;
    statusUpdate: (data: Status) => void;
    signOut: () => void;
}

export interface AuthStateInterface {
    user: User | undefined
    status: 'autenticated' | 'not-autenticated' | 'loading'
    token: string | undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext({} as Contextprops)

export const AuthState: AuthStateInterface = {
    user: undefined,
    status: 'loading',
    token: undefined
}



export const AuthProvider: FC<Props> = ({ children }) => {

    
    const { baseURL } = baseApI(AuthState.token!)

    const [stateAuth, dispatch] = useReducer(AuthReducer, AuthState)
    


    const statusUpdate = (data: Status) => {

        dispatch({ type: 'changeLoadingStatus', payload: data.status })

    }

    const signIn = ( data: LoginSuperadmin ) => {
        sessionStorage.setItem('token', data.access_token)
        dispatch({ type: 'signIn', payload: data })
    }

    const signOut = () => {
        sessionStorage.removeItem('token');
        dispatch({ type: 'signOut' })
    }

    useEffect(() => {

        const aute = async () => {

            try {

                const token = sessionStorage.getItem('token')

                const { data } = await baseURL.get<User>('auth/user', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch({ type: 'refreshStatus', payload: {user: data, token: token} })
                dispatch({ type: 'changeLoadingStatus', payload: 'autenticated' })

            } catch (error) {
                console.log(error);
                dispatch({ type: 'changeLoadingStatus', payload: 'not-autenticated' })
            }

        }

        aute()


    }, [])


    return (
        <AuthContext.Provider
            value={{
                stateAuth,
                signIn,
                statusUpdate,
                signOut
            }}>
            {children}
        </AuthContext.Provider>
    )
}
