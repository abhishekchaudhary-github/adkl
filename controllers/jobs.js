const Jobs = require('../models/Job')
const {StatusCodes} = require('http-status-codes')

const get = async (req,res) => {
    res.send(req.user)
}

const getall = async (req,res) => {
    // await Jobs.find({});
    console.log('1')
    res.json(req.user)
}

const del = async (req,res) => {
    res.send()
}

const update = async (req,res) => {
    res.send()
}

const create = async (req,res) => {
    req.body.createdBy = req.user.userId
    const response = await Jobs.create(req.body)
    res.status(StatusCodes.CREATED).json({job : response})
}

module.exports = {get,getall,del,update,create}