const express = require('express')
const app = express()
const cookiparser = require('cookie-parser')
app.use(cookiparser())
const session = require("express-session")
app.use(session({ secret: "skill@123", resave: true, saveUninitialized: true, cookie: { maxAge: 60 * 60 * 1000 } }))

app.get("/setsession", (req, res) => {
    req.session.name = "admin"
    req.session.upwd = "admin@123"
    res.send("sessions created")
})
app.get("/getsession", (req, res) => {

    res.send(`sessions name"${req.session.name} and upwd ${req.session.upwd}`)
})
app.get("/deletesession", (req, res) => {
    req.session.destroy()
    res.send("deleted")
})
app.listen(5151, () => {
    console.log("server is run")
})