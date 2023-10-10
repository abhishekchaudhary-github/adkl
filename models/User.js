const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const NewSchema = new mongoose.Schema({
    username:{type:String, required : [true,"username must not be empty"], unique:true},
    email:{type:String, required : [true,"email must not be empty"], unique:true},
    password:{type:String, required : [true,"password must not be empty"]}
})

NewSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    console.log('2')
    //const encrPass = await bcryptjs.hash(password,numSaltRounds)
    this.password = await bcrypt.hash(this.password,salt)
    // jwl.sign({username,password},process.env.jwt_key)
    next();
})

NewSchema.methods.createjwt = function () {
    return jwt.sign({userId:this._id,name:this.username},process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

NewSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password,this.password)
    return isMatch
}

module.exports = mongoose.model('User',NewSchema);