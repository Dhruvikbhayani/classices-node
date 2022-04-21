const express = require('express')
const mongodb = require('mongodb')
const module4 = express.Router()
const skill = mongodb.MongoClient

module4.delete("/", (req, res) => {
    const connections = req.db
    const db = connections.db(process.env.DATABASE_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    db.collection(process.env.COLLECTION_NAME).deleteOne({ "name": req.body.name }, (err, result) => {
        if (err) throw err;
        else {
            res.send("Data is delete")
            console.log(db)
        }

    })


})
module.exports = module4