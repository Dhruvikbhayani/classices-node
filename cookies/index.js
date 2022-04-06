const express = require('express')
const app = express()
const cookieParse = require('cookie-parser')
app.use(cookieParse())

app.get("/setcookies", (req, res) => {
    res.cookie("sub-one", "react.js")
    res.cookie("sub-two", "node.js")
    res.cookie("sub-three", "mongodb")
    res.send({ "message": "cookies are set" })
})

app.get("/getcookies", (req, res) => {
    res.send(req.cookies)
})

app.get("/deletecookies", (req, res) => {
    res.clearCookie("sub-one")
    res.send("cookies deleted")
})
app.listen(5030, () => {
    console.log("server is run in 5030")
})