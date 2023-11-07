import { useRef, useState, useEffect } from "react";
import {useLogin} from '../hooks/useLogin'
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {

    const navigate = useNavigate()
    const {user} = useAuthContext()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useLogin()
    const handleSubmit = async(e) => {
        e.preventDefault()
        
        await login(email,password)
       
  
            
        
    }

   
    return(
        <form className= "sign-up" onSubmit={handleSubmit}>
            <label className="Header">Login</label>
            {error &&(
           <div className="error">
            {error}
            </div>
            )}
            <label>Email</label>
            <input  
            type = "email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>

<label>Password</label>
            <input  
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
        <button disabled={isLoading} onClick={()=> user ? navigate("/review") : navigate('/')} >Login</button>
      
        <h5>Don't Have an account?</h5><Link to ='/sign-up'>Sign Up</Link>
        </form>
    )
}

export default Login