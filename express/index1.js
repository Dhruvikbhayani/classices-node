const express = require('express')
const res = require('express/lib/response')
const app = express()
app.listen(5011, () => {
    console.log("port is run")
})
app.get("/", () => {
    res.json({ "message": "welcome to get" })
})
app.get("/products", () => {
    res.json({ "message": "welcome to get products" })
})
app.post("/", () => {
    res.json({ "message": "welcome to post " })
})
app.post("/products", () => {
    res.json({ "message": "welcome to post products" })
})
app.head("/", () => {
    res.json({ "message": "welcome to head " })
})
app.head("/products", () => {
    res.json({ "message": "welcome to head products" })
})
app.delete("/", () => {
    res.json({ "message": "welcome to delete" })
})
app.delete("/products", () => {
    res.json({ "message": "welcome to get" })
})