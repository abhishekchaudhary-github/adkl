require('dotenv').config()
const UnauthenticatedError = require('../errors/unauthenticated')
const JWT_secret = process.env.JWT_secret;

const authentication =(req,res)=>{
    if(!req.headers.authentication&&!req.headers.authentication.startsWith('Bears ')){
        throw new UnauthenticatedError('token not present')
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        const decodedAns = jwt.decode(token,process.env.JWT_secret)
        req.decodedAns = decodedAns
        next()
} catch(err) {
        throw new CustomAPIError("authentication error",401)
}
}

module.exports = authentication