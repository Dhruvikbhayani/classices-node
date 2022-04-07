const express = require('express')
const app = express()
const port = 5010
app.use(express.json())
const loginmodule = require("./login/login")

app.use("/login", loginmodule)

app.listen(port, (req, res) => {
    console.log(`server is runing ${port}`)
})