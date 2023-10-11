const route = require('express').Router();
const {get, getall,del,update,create} = require('../controllers/jobs')

route.route('/:id').get(get).delete(del).patch(update)
route.route('/').get(getall).post(create)

module.exports = route