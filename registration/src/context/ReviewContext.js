import {createContext, useReducer,useEffect} from 'react'

export const ReviewContext = createContext()

export const reviewReducer = (state,action)=> {
    switch(action.type){
        case 'SET_REVIEW' :
            return {
                reviews: action.payload
            }
        case 'CREATE_REVIEW' :
            return {reviews: [action.payload,state.reviews]}
   
        default:
            return state
    }
}
export const ReviewContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reviewReducer,{
        reviews : null})



return (
    <ReviewContext.Provider value ={{...state,dispatch}}>
        {children}
    </ReviewContext.Provider>
)
}