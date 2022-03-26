const express = require('express')
const app = express()
var bodyparser = require('body-parser')
app.listen(5000, () => {
    console.log("port is run")
})
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html")
})
app.post("/login", (req, res) => {
    console.log(req.body)
    if (req.body.uname == "skill" && req.body.upwd == "qode") {
        res.end("<h1>login successful</h1>")
    } else {
        res.end("<h1>login fail</h1>")

    }
})

//fallback
// app.use("/", (req, res) => {
//     console.log("no page")
// })