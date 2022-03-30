const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    "name": { type: String, require: true },
    "password": { type: String, require: true },
    "isadmin": { type: Boolean, require: true },
    "email": { type: String, require: true },
})

const user = mongoose.model("users", userschema)
module.exports = user