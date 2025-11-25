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
	let { model, color, raqam, userId } = req.body
	if (!(model, color, raqam, userId))
		return res.json({
			message: 'All data required',
		})
	let users = readFile('./users.json')
	let user = users.find((el) => el.id == userId)
	if (!user)
		return res.json({
			message: 'User not found in this id',
		})

	let newCar = {
		id: cars[cars.length - 1] ? cars[cars.length - 1].id + 1 : 1,
		model,
		color,
		raqam,
		userId,
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
module.exports = {
	getCar,
	postCar,
	getCarById,
}
