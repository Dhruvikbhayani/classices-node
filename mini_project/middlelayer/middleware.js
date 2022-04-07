const express = require('express')
const tokenobj = require("../token/token")


const middleware = (req, res, next) => {
    const reqHeaders = req.headers
        // console.log(tokenobj.token)

    if (reqHeaders.token == tokenobj.token) {
        next()
    } else {
        res.json({ "mesg": "unauthorized user...." })
    }
}
module.exports = middleware