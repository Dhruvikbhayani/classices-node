const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    // no: {
    //     type: String,

    // }
    Fname: {
        type: String
    },
    Lname: {
        type: String
    },
    Contact: {
        type: Number
    },
    emailid: {
        type: String
    },
    passwoed: {
        type: String
    },
    cpassword: {
        type: String

    }
})

const user = mongoose.model("tradata", userschema)
module.exports = user