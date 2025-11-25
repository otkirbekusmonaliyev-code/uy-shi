const { writeFile, readFile } = require('../utils/fs.js')
let cars = readFile('./cars.json')

function getCar(req, res) {
	let data = readFile('./cars.json')
	return res.json({
		message: 'Success',
		data,
	})
}

function postCar(req, res) {
	let { model, color, raqam, carId } = req.body
	if (!(model, color, raqam, carId))
		return res.json({
			message: 'All data required',
		})
	let cars = readFile('./cars.json')
	let car = cars.find((el) => el.id == carId)
	if (!car)
		return res.json({
			message: 'car not found in this id',
		})

	let newCar = {
		id: cars[cars.length - 1] ? cars[cars.length - 1].id + 1 : 1,
		model,
		color,
		raqam,
		carId,
	}
	cars.push(newCar)
	const message = writeFile('./cars.json', cars)
	return res.json({
		message,
		newCar,
	})
}

function getCarById(req, res) {
	const id = +req.params.id
    let car = cars.find(el => el.id == id)
    if (!car) return res.json({
        message: "Car not found"
    })

    res.json({
        message: "Success",
        car
    })
}

function updateCar(req, res){
	let cars = readFile('./cars.json')
    let body = req.body
    let car = cars.find(el => el.id == req.params.id)
	if (!car)
    return res.json({ 
		message: "EROR"
	})
		
    car.model = body.model ? body.model : car.model
    car.color = body.color ? body.color : car.color
    car.raqam = body.raqam ? body.raqam : car.raqam
    car.carId = body.carId ? body.carId : car.carId
    writeFile('./cars.json', cars)

    res.json({
        message: "Succsess",
        car
    })
}

function deleteCar(req, res){
	let cars = readFile('./cars.json')
	let id = req.params.id
	let car = cars.filter(el => el.id != id)
	writeFile('./cars.json', car)

	res.json({
		message: "success delete of car"
	})
}

module.exports = {
	getCar,
	postCar,
	getCarById,
	updateCar,
	deleteCar
}
