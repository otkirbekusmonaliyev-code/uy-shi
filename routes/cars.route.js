const express = require('express')
const {getCar, postCar, getCarById, updateCar, deleteCar} = require('../controller/cars.controller.js')

const route = express.Router()

route.get('/cars', getCar)
route.post('/cars', postCar)
route.get('/cars/:id', getCarById)
route.put('/cars/:id', updateCar)
route.delete('/cars/:id', deleteCar)

module.exports = route