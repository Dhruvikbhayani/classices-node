const express = require('express')
const module1 = express.Router()
const mongodb = require('mongodb')
const skill = mongodb.MongoClient

module1.get("/", (req, res, next) => {
    const connections = req.db
    const db = connections.db(process.env.DATABASE_NAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    db.collection(process.env.COLLECTION_NAME).find().toArray((err, data) => {
        if (err) throw err
        else {
            res.send(data)
                // console.log(db)
        }
    })

})





module.exports = module1