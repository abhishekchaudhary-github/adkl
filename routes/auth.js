const route = require('express').Router();
const {login, signup} = require('../controllers/auth')

route.post('/login',login)
route.post('/signup',signup)

module.exports = route