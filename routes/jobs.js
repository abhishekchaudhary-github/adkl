const route = require('express').Router();
const {get, getall,del,update} = require('../controllers/jobs')

route.route('/:id').get(get).delete(del).patch(update)
route.route('/').get(getall)

module.exports = route