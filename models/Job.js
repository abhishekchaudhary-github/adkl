const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    company : {type:String, required : [ true,"company name is not provided" ]},
    position : {type:String, required : [ true,"company name is not provided" ]},
    status : {type:String, enum:{values:['pending','interview','selected']}} ,
    createdBy : String
})

module.exports = mongoose.model('Job',schema);