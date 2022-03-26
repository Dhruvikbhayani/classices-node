// http://localhost:8400/?uname=skill&upwd=qode
const express = require("express")
const url = require('url')
const app = express()
app.listen(8400, () => {
    console.log(`this port is run 8400`)
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "form.html")
})
app.get("/login", (req, res) => {
    var name = req.query.uname
    var password = req.query.upwd
    name === "skill" && password === "qode" ? res.write("<h1>login success</h1>") : res.write("<h1>login file</h1>")
    res.end()
})