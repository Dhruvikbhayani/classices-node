const express = require('express')
const tokenobj = require('../token/token')
const module2 = express.Router()

module2.get("/", require("../middlelayer/middleware"), (req, res) => {
    // const reqHeaders = req.headers
    //     // console.log(tokenobj.token)
    res.json({ "mesg": "Welcome  to module2" })
        // if (reqHeaders.token == tokenobj.token) {
        //     res.json({ "mesg": "Welcome  to module2" })
        // } else {
        //     res.json({ "mesg": "unauthorized user...." })
        // }

})

module.exports = module2