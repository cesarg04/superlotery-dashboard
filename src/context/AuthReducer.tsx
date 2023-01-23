import { AuthStateInterface } from "./AuthContext";
import { LoginSuperadmin, User } from '../features/auth/interfaces/index'

type Actions = 
{ type: 'signIn', payload: LoginSuperadmin}
| { type: 'refreshStatus', payload: { user: User }}
| { type: 'changeLoadingStatus', payload: 'autenticated' | 'not-autenticated' | 'loading'}
| { type: 'signOut' }
// | { type: 'username-put', payload: string }


export const AuthReducer = (state: AuthStateInterface, action: Actions ): AuthStateInterface => {
  

    switch (action.type) {
        case 'signIn':
            
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.access_token,
                status: 'autenticated'
            }

        case 'refreshStatus': 
            return{
                ...state,
                user: action.payload.user
            }
    
        case 'changeLoadingStatus':
            return{ 
                ...state,
                status: action.payload
            }

        case 'signOut':
            return state

        default:
            return state;
    }

}



