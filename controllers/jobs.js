const Jobs = require('../models/Job')

const get = async (req,res) => {
    res.send('hi')
}

const getall = async (req,res) => {
    await Jobs.find({});
    res.send('hi')
}

const del = async (req,res) => {
    res.send()
}

const update = async (req,res) => {
    res.send()
}

module.exports = {get,getall,del,update}