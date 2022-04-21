const express = require('express')
const mongodb = require('mongodb')
const module3 = express.Router()
const skill = mongodb.MongoClient

module3.put("/", (req, res, next) => {
    const connections = req.db
    const db = connections.db(process.env.DATABASE_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    db.collection(process.env.COLLECTION_NAME).updateOne({ "name": req.body.name }, {
        $set: {
            "name": req.body.name,
            "age": req.body.age,
            "email": req.body.email
        }

    }, (err, result) => {
        if (err) throw err;
        else {
            res.send("Data is update")
            console.log(db)
        }

    })
})
module.exports = module3