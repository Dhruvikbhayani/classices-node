const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const skill = mongodb.MongoClient
const module2 = express.Router()

module2.post("/", (req, res, next) => {

    const data = {

        "name": req.body.name,
        "age": req.body.age,
        "email": req.body.email
    }
    const connections = req.db
    const db = connections.db(process.env.DATABASE_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    db.collection(process.env.COLLECTION_NAME).insertMany(req.body, (err, result) => {
        if (err) throw err
        else {
            res.send("data is insert")

        }
    })

})
module.exports = module2