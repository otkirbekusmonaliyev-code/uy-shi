const express = require('express')
const { postUser } = require('../controller/users.controller.js')
const route = express.Router()

// route.get()
route.post('/users', postUser)
// route.put()
// route.delete()

module.exports = route
