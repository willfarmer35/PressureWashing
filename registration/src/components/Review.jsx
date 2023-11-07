import react,{useEffect,useState} from 'react'
import {useLogout} from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useReviewContext } from '../hooks/useReviewContext'
import {FaStar} from 'react-icons/fa'
import NavBar from '../items/NavBar'
import './Home.css'
const Home = () => {
    const {reviews,dispatch} = useReviewContext()
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const {logout} = useLogout()

    
   
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch('http://localhost:8000/api/review')
            const json = await response.json()
            
            if(response.ok){
                dispatch({type:'SET_REVIEW', payload:json})
            }
        }
       
            fetchReviews()
        
       
    })
    
    return(
        
        <div className='main-container'>
            <NavBar />
            {user &&(
           <div className='Create-Button'>
            <button className='write-review' onClick={()=> navigate("/create")}>Write a Review</button>
            </div>
            )}
                             {!user &&(
          <div className='nonloggedinuser'> 
        Sign-in or Sign-Up to write Reviews!
          </div>
            )}
            
             <div className='reviews' >
             {reviews && reviews.map((review)=>(
             <div className='review-content' >
                 <h2>{review.name}</h2>
                 {
                 [...Array(review.rating)].map((index) => {
                
                 return(
                   
                 
                     <FaStar className='star' size={25} 
                     color={review.rating  <= review.rating ? "#ffc107":"#e4e5e9"}/>
               
                 )

             })}
             
             <div className='review-post'> {review.post} </div>
                 
                </div>
             ))}
           
         </div>
            

   
                
              
            </div>
       
        
    )
}
export default Home