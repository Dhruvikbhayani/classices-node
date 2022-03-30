const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const data = require("./data")
const user = require('./usermodel')
const port = 2020
app.use(express.json())

//mongodb connect
mongoose.connect("mongodb://localhost:27017/dhruvik", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/insert", (req, res) => {
    const result = user.insertMany(data.users)
    res.send(result)
})

app.listen(port, () => {
    console.log(`srever is running port ${port}`)
})