const express = require('express')
const mongodb = require('mongodb')
const skill = mongodb.MongoClient
const module2 = express.Router()

module2.post("/", (req, res) => {

    const data = {
        "name": req.body.name,
        "age": req.body.age,
        "email": req.body.email
    }
    skill.connect(process.env.CONNECTION_URL, (err, connections) => {
        if (err) throw err;
        else {
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
        }
    })
})
module.exports = module2