import { useRef, useState, useEffect } from "react";
import { useSignup } from "../hooks/useSignUp";
import './signup.css' 
import { Link,useNavigate} from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Registration = () => {
    const {user} = useAuthContext()
    const navigate = useNavigate('/')
    const [email,setEmail] = useState('')
    const [firstname,setFirstname] = useState('')
    const [password,setPassword] = useState('')
    const {signup,error,isLoading} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        await signup(email,firstname,password)
        
     
    }
    return(
        <form className= "sign-up" onSubmit={handleSubmit}>
            
            <label className="Header">Sign Up</label>
            {error &&(
           <div className="error">
            {error}
            </div>
            )}
            <label>Email:</label>
            <input  
            type = "email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>


       

            <label>First Name:</label>
            <input  
            type = "text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}/>

<label>Password:</label>
            <input  
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
            
            <button disabled={isLoading} onClick={()=> user ? navigate("/review") : navigate('/sign-up')} >Sign Up</button>
     
            <h5>Have an account?</h5><Link to ='/'>Login</Link>
        </form>
    )
}

export default Registration