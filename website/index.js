const express = require("express")
const app = express()
var usersrouter = express.Router()
app.use("/users", usersrouter)
const port = 5000;

usersrouter.get("/home", (req, res) => {
    res.sendFile(__dirname + "/users/home.html")
})


usersrouter.get("/about", (req, res) => {
    res.sendFile(__dirname + "/users/about.html")
})


usersrouter.get("/service", (req, res) => {
    res.sendFile(__dirname + "/users/service.html")
})

//admin rout
var adminrouter = express.Router()
app.use("/admin", adminrouter)
adminrouter.get("/home", (req, res) => {
    res.sendFile(__dirname + "/admin/home.html")
})
adminrouter.get("/about", (req, res) => {
    res.sendFile(__dirname + "/admin/about.html")
})

adminrouter.get("/service", (req, res) => {
    res.sendFile(__dirname + "/admin/service.html")
})

//manager
var manrouter = express.Router()
app.use("/manager", manrouter)
manrouter.get("/home", (req, res) => {
    res.sendFile(__dirname + "/manager/home.html")
})

manrouter.get("/about", (req, res) => {
    res.sendFile(__dirname + "/manager/about.html")
})


manrouter.get("/service", (req, res) => {
    res.sendFile(__dirname + "/manager/service.html")
})


app.listen(port, () => {
    console.log(`server is run ${port}`)
})