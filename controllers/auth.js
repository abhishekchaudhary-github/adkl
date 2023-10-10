require('dotenv').config()
const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')
const UnauthenticatedError = require('../errors/unauthenticated')

const login= async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        throw new UnauthenticatedError('empty fields')
    }
    const user = await User.findOne({email});
    if(!user){
        throw new UnauthenticatedError('invalid credentails')
    }
    const comparePassword = await user.comparePassword(password)
    if(!comparePassword){
        throw new UnauthenticatedError('invalid credentials')
    }
    const token = user.createjwt()
    res.json({ user: { name: user.username }, token })
}

const signup= async (req,res)=>{
    try{
    const {username,email,password} = req.body 
    const response = await User.create({"username":username,"email":email,"password":password})
    // const response = await User.create({...req.body})
    // const token = await jwt.sign({userId:response._id,name:response.username},'supersecret', {
    //     expiresIn: '30d',
    //   })
    const token = response.createjwt()
    res.status(StatusCodes.CREATED).json({user:{name:response.username}},token)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {login,signup}