import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
const{dispatch} = useAuthContext()
    const logout = () => {
        localStorage.removeItem('user')
    
    //dispatch logout action
    dispatch({type: 'Logout'})
    }
    return {logout}
}