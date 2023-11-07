const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const validator = require('validator')
const userSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    firstname: {
        type:String,
        required:true,
        min:[3, "This name is too short"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    password: {
        type:String,
        required:true
    }

})
//static signup method
userSchema.statics.signup = async function(email,password,firstname) {
    //validation
    if(!email ){
        throw Error('Email is missing')
    }
    if(!password ){
        throw Error('Password is missing')
    }
    if(!firstname){
        throw Error('First name is missing')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not Strong Enough')
    }
  
    
    
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email,firstname,password: hash})

    return user


}

userSchema.statics.login = async function(email,password,firstname){
    if(!email|| !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})

    if (!user){
        throw Error('Incorrect Email')
    }
    if (user){
        this.findOne({firstname})
    }
 
    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}
module.exports = mongoose.model('User',userSchema)