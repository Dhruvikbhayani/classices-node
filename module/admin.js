const express = require('express')
const app = express()
let adminmodule = express.Router()

adminmodule.post("/home", (req, res) => {
    res.json({ "message": "Welcome to admin home page" })
})


adminmodule.get("/about", (req, res) => {
    res.json({ "message": "Welcome to admin about page" })
})


adminmodule.get("/service", (req, res) => {
    res.json({ "message": "Welcome to admin service page" })
})
module.exports = adminmodule;