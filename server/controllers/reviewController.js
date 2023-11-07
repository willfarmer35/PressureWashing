const Review = require("../models/reviewModel")
const mongoose = require('mongoose')

//get all reviews
const getReviews = async (req,res) => {
    const reviews = await Review.find({}).sort({createdAt: -1})
    res.status(200).json(reviews)
}
//get one review
const getReview = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Review'})
    }

    const review = await Review.findById(id)

    if(!review){
        return res.status(404).json({error: 'No such review'})
    }
    res.status(200).json(review)
}
//create review
const createReview = async(req,res) => {
    const {post,rating,name} = req.body

    let emptyFields = []

    if(!post){
        emptyFields.push('post')
    }
    if(!rating){
        emptyFields.push('rating')
    }
    if(!name){
        emptyFields.push('name')
    }
    if(emptyFields.length >0){
        return res.status(400).json({error:'Please fill in all fields'})
    }
  
    try {
       const user_id = req.user._id
   
       const review = await Review.create({post,rating,name,user_id})
     
        res.status(200).json(review)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a workout
const deleteReview = async (req,res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such review"})

    }
    const review = await Review.findOneAndDelete({_id:id})

    if(!review){
        return res.status(400).json({error:'No such Review'})
    }
    res.status(200).json(review)
}
module.exports = {deleteReview, createReview,getReviews,getReview}


