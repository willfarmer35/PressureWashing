const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3,"Name must be 3 characters long"]
    },
    rating: {
        type: Number,
        required: [true, "Review Number is required"],
        min:[0,"Cant be less than 0"],
        max: [10,"cant be more than 10"]

    },
    name:
{
    type: String,
    required:true
},
    user_id:
{
    type:String,
    required:[true, "must contain user"],
    unique:[true,"User already Posted"]
}
})

const Review = mongoose.model("Product", ReviewSchema)

module.exports = Review