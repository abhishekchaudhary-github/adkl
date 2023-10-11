const Jobs = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {notFoundError} = require('../middleware/not-found')

const get = async (req,res) => {
    const response = await Jobs.find({'createdBy':req.user.userId,'_id':req.params.id})
    if(!response){
        throw new notFoundError('resources not found')
    }
    res.status(StatusCodes.OK).json({job:response})
}

const getall = async (req,res) => {
    // await Jobs.find({});
    let id = req.user.userId
    const response = await Jobs.find({'createdBy':id})
    res.status(StatusCodes.OK).json({job:response})
}

const del = async (req,res) => {
    res.send()
}

const update = async (req,res) => {
    const updatingContent = req.body
    //maybe buggy line
    if(req.body.company==''||req.body.position==''){
        throw new CustomAPIError("empty fields not allowed",400)
    }
    const response = await Jobs.updateOne({'createdBy' : req.user.userId, _id: req.params.id }, { ...updatingContent },{runValidators:true,new:true});
    res.status(StatusCodes.ACCEPTED).json({job : response})
}

const create = async (req,res) => {
    req.body.createdBy = req.user.userId
    const response = await Jobs.create(req.body)
    res.status(StatusCodes.CREATED).json({job : response})
}

module.exports = {get,getall,del,update,create}