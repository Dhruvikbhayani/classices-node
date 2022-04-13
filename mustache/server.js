const express = require('express')
const app = express()
const mustache = require('mustache-express')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')

app.get("/", (req, res) => {
    var model = {
        studentid: "501",
        studentname: "Dhruvik",
        studentmarks: "60",
        subject: [
            { name: "math", marks: "33" },
            { name: "sci", marks: "33" },
            { name: "english", marks: "55" }
        ]
    }
    res.render('student', model)
})


app.listen(8010, (req, res) => {
    console.log("server is run")
})