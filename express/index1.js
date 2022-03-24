const express = require('express')
const app = express()
app.listen(5012, () => {
    console.log("port is run")
})
app.get("/", (req, res) => {
    res.json({ "message": "welcome to get" })
})
app.get("/products", (req, res) => {
    res.json({ "message": "welcome to get products" })
})
app.post("/", (req, res) => {
    res.json({ "message": "welcome to post " })
})
app.post("/products", (req, res) => {
    res.json({ "message": "welcome to post products" })
})
app.head("/", (req, res) => {
    res.json({ "message": "welcome to head " })
})
app.head("/products", (req, res) => {
    res.json({ "message": "welcome to head products" })
})
app.delete("/", (req, res) => {
    res.json({ "message": "welcome to delete" })
})
app.delete("/products", (req, res) => {
    res.json({ "message": "welcome to get" })
})