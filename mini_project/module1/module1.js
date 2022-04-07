const express = require('express')
const tokenobj = require('../token/token')
const module1 = express.Router()

module1.get("/", (req, res) => {
    const reqHeaders = req.headers
        // console.log(tokenobj.token)

    if (reqHeaders.token == tokenobj.token) {
        res.json({ "mesg": "Welcome  to module1" })
    } else {
        res.json({ "mesg": "unauthorized user...." })
    }

})

module.exports = module1