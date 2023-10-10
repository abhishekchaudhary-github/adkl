const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    company : {type:String, required : [ true,"company name is not provided" ]},
    position : {type:String, required : [ true,"company name is not provided" ]},
    status : {type:String, enum:{values:['pending','interview','selected']}} ,
    createdBy : {type:mongoose.Types.ObjectId,ref:'User',
                 required:[true,"please provide the user"]}
},{timestamps:true})

module.exports = mongoose.model('Job',schema);