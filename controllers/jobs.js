const Jobs = require('../models/Job')

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

module.exports = {get,getall,del,update}