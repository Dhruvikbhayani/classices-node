const express = require('express');

const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const users = require('./tranmodel')
const mysql = require('mysql');

mongoose.connect('mongodb://localhost:27017/trandata', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'skilldb'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
app.get("/get", (req, res) => {
    let sql = "SELECT * FROM registration ";

    let query = con.query(sql, (err, results) => {
        if (err) throw err;

        users.insertMany(results).then((data => {
                console.log(data)
            }))
            // console.log(results) // res.send(results);
    });

})


app.post("/post", (req, res) => {

    let data = {
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        Contact: req.body.Contact,
        emailid: req.body.emailid,
        passwoed: req.body.passwoed,
        cpassword: req.body.cpassword
    };


    let sql = "INSERT INTO registration SET ?";
    con.query(sql, data, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.send(result)
    });
})

app.listen(5000, () => {
    console.log("server is run 5000")
})