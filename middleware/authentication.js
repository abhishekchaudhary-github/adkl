require('dotenv').config()
const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticated')

const authentication = (req,res,next)=>{
    if(!req.headers.authorization||!req.headers.authorization.startsWith('Bearer ')){
        throw new UnauthenticatedError('token not present')
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        const decodedAns = jwt.verify(token,process.env.JWT_secret)
        console.log(decodedAns)
        req.user = {userId:decodedAns.userId, name:decodedAns.name}
        next()
} catch(err) {
        throw new CustomAPIError("authentication error",401)
}
}

module.exports = authentication