const express = require('express')
const tokenobj = require('../token/token')
const module3 = express.Router()

module3.get("/", (req, res) => {
    const reqHeaders = req.headers
        // console.log(tokenobj.token)

    if (reqHeaders.token == tokenobj.token) {
        res.json({ "mesg": "Welcome  to module3" })
    } else {
        res.json({ "mesg": "unauthorized user...." })
    }

})

module.exports = module3