const express = require('express')
const mongoose = require('mongoose')
const app = express()
const data = require("./data")
const user = require('./usermodel')
const port = 2021
app.use(express.json())
    // const cors = require('cors')
    // app.use(cors())

//mongodb connect
mongoose.connect("mongodb://localhost:27017/dhruvik", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.post("/insert", (req, res) => {
    // const result = user.insertMany(data.users)
    // res.send(result)

    user.Save({}).then((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
    mongoose.disconnect()
})

// app.get("/insert", (req, res) => {
//     // const result = user.insertMany(data.users)
//     // res.send(result)
//     mongoose.disconnect()
// })

app.listen(port, () => {
    console.log(`srever is running port ${port}`)
})