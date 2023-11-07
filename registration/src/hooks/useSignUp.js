import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = async(email,firstname,password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:8000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,firstname,password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save to local storage
            localStorage.setItem('user', JSON.stringify(json))
            
            //update the auth contet
            dispatch({type:'Login',payload: json})
            
            setIsLoading(false)
        }
        
    }
    return {signup,isLoading, error}
    
}
