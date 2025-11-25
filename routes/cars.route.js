const express = require('express')
const {getCar, postCar, getCarById} = require('../controller/cars.controller.js')

const route = express.Router()

route.get('/cars', getCar)
route.post('/cars', postCar)
route.get('/cars/:id', getCarById)

module.exports = route