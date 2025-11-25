const express = require('express')
const userRoute = require('./routes/users.route.js')
const carRoute = require("./routes/cars.route.js")

const app = express()
app.use(express.json())


app.use(userRoute)
app.use(carRoute)
app.listen(8080, () => console.log(8080))