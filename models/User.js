const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String, required : [true,"username must not be empty"]},
    email:{type:String, required : [true,"email must not be empty"]},
    password:{type:String, required : [true,"password must not be empty"]}
})

module.exports = mongoose.model('Store',schema);