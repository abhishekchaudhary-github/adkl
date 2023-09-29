require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs');
const numSaltRounds = parseInt(process.env.numSaltRounds);
const User = require('../models/User')
const UnauthenticatedError = require('../errors/unauthenticated')
const JWT_secret = process.env.JWT_secret;

const login= async (req,res)=>{
    const {username,password} = req.body
    const encrPass = await bcryptjs.hash(password,numSaltRounds)
    const resp = await User.find({"username":username,"password":encrPass})
    if(!resp){
        throw new UnauthenticatedError('wrong username or password')
    }
    const token = await jwt.sign({"username":username,"password":password},JWT_secret)
    res.json({ user: { name: user.name }, token })
}

const signup= async (req,res)=>{
    try{
    const {username,email,password} = req.body
    const encrPass = await bcryptjs.hash(password,numSaltRounds)
    // jwl.sign({username,password},process.env.jwt_key)
    const response = await User.create({"username":username,"email":email,"password":encrPass})
    res.json(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {login,signup}