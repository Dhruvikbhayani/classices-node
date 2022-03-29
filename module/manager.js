const express = require('express')
const app = express()
let managermodule = express.Router()

managermodule.post("/home", (req, res) => {
    res.json({ "message": "Welcome to manager home page" })
})


managermodule.get("/about", (req, res) => {
    res.json({ "message": "Welcome to manager about page" })
})


managermodule.get("/service", (req, res) => {
    res.json({ "message": "Welcome to manager service page" })
})
module.exports = managermodule;