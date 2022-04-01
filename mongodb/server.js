const express = require('express')
const mongoose = require('mongoose')
const app = express()
const data = require("./data")
const user = require('./usermodel')
const port = 2021
const bodyparase = require('body-parser')
const { use } = require('express/lib/application')
app.use(bodyparase.json())
app.use(express.json())
    // const cors = require('cors')
    // app.use(cors())

//mongodb connect
mongoose.connect("mongodb://localhost:27017/dhruvik", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get("/insert", (req, res) => {
    // const result = user.insertMany(data.users)
    // res.send(result)

    var users = new user(req.query)
    users.save().then((err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        //mongoose.disconnect()
})

app.post("/insert", (req, res) => {
    // const result = user.insertMany(data.users)
    // res.send(result)

    var users = new user(req.body)
    users.save().then((err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
        //mongoose.disconnect()
})
app.listen(port, () => {
    console.log(`srever is running port ${port}`)
})