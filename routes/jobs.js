const route = require('express').Router();
const {get, getall,del,update,create} = require('../controllers/jobs')

route.route('/:id').get(get).delete(del).patch(update).post(create)
route.route('/').get(getall)

module.exports = route