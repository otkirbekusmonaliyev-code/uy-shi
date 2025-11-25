const {readFile, writeFile} = require("../utils/fs.js")
const postUser = (req, res) => {
    const body = req.body
    if(!(body.firstName && body.phone && body.password)) return res.json({
        message: "All data required"
    })
    let data = readFile("./users.json")
    let user = data.find(el => el.phone == body.phone) 
    if(user) return res.json({
        message: "User already exist in this phone"
    })
    body['id'] = data[data.length - 1] ? data[data.length - 1].id  + 1 : 1
    data.push(body)
    const msg = writeFile('users.json', data)
    res.json({
        msg,
        body
    })


}

module.exports = {
    postUser
}