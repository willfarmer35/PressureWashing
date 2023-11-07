import React, { useEffect, useState } from 'react'
import {FaStar} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useReviewContext } from '../hooks/useReviewContext'
import './create.css'
const Create = () => {
    const {dispatch} = useReviewContext()
    const {user} = useAuthContext()
    const [post, setPost] = useState("")
    const [rating, setRating] = useState("")
    const [hover,setHover] = useState()
    var name = ""
   
    const [emptyFields,setEmptyFields]= useState([])

    const [errors, setErrors] = useState([])
    const navigate = useNavigate({})
 
    const handleSubmit = async(e) => {
        e.preventDefault()
        name = user.firstname
        const review = {post,rating,name}

        const response = await fetch('http://localhost:8000/api/review',{
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            if(json.error.includes('E11000')){
                return setErrors ("User already posted")
            }
            setErrors(json.error)
         
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setPost('')
            setRating('')
           navigate('/review')
            setErrors(null)
            console.log('new workout created',json)
            dispatch({type: 'CREATE_REVIEW', payload: json})
        }
    }
   
    return (
        <div>

{errors && (
 <div className="error">{errors}</div>
                )}

            <form onSubmit={handleSubmit} >
            <hr />
            <label>Rating:</label>
                {[...Array(5)].map((star,index) => {
                    const currentRating = index +1
                    return(
                        <label className='starrynight'>
                        <input type = "radio"
                        value ={currentRating}
                        onClick={() =>setRating(currentRating)}/>
                        <FaStar className='star' size={40}
                        color={currentRating <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                        onMouseEnter={()=> setHover(currentRating)}
                        onMouseLeave={()=> setHover(null)}/>
                    </label>
                    )
                })}
               <hr />
                <label>Comment:</label>


                <input type='text' className='post-post' value={post} onChange={(e) => setPost(e.target.value)} />



                


                <input type='hidden' value={name}  />
                

                <button type="submit"> Submit </button>

               
                <button><Link to ={'/review'}>Cancel</Link></button>
            </form>
           
        </div>
    )
}
export default Create