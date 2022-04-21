const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const skill = mongodb.MongoClient
const module2 = express.Router()

module2.post("/", (req, res) => {

    const data = {
        "_id": new mongoose.Types.ObjectId(),
        "name": req.body.name,
        "age": req.body.age,
        "email": req.body.email
    }
    const connections = req.db
    const db = connections.db(process.env.DATABASE_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    db.collection(process.env.COLLECTION_NAME).insertOne(data, (err, result) => {
        if (err) throw err
        else {
            res.send("data is insert")

        }
    })

})
module.exports = module2