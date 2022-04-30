const express = require('express')
const jwt = require('jwt-simple')
const tokenobj = require('../token/token')
const loginrouter = express.Router()
loginrouter.post("/", (req, res) => {
    const uname = req.body.uname
    const upwd = req.body.upwd
    if (uname == "a" && upwd == "b") {
        const token = jwt.encode({ "uname": uname, "upwd": upwd }, "skill@123")
        tokenobj.token = token
        res.json({ "login": "success", token })
    } else {
        res.send("login fail")
    }
})
module.exports = loginrouter;