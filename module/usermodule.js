const express = require('express')
const app = express()
let usermodule = express.Router()

usermodule.post("/home", (req, res) => {
    res.json({ "message": "Welcome to users home page" })
})


usermodule.get("/about", (req, res) => {
    res.json({ "message": "Welcome to users about page" })
})


usermodule.get("/service", (req, res) => {
    res.json({ "message": "Welcome to users service page" })
})
module.exports = usermodule;