const express = require('express')
const app = express()

//middleware
const authorization = (req, res, next) => {
    const allheadre = req.headers;
    // console.log(allheadre)
    if (allheadre.token == "Dhruvik") {
        next()
    } else {
        res.send({ "meassage": "unauthorized" })
    }
}
app.get("/demo", authorization, (req, res) => {
    if (req.query.name == "skill" && req.query.pwd == "qode") {
        res.send({
            "logic": "success"
        })
    } else {
        res.send({ "login": "fail" })
    }
})

app.listen(5040, () => {
    console.log("server is run 5040")
})