const express = require('express')
const app = express()
const port = 5010
app.use(express.json())
const loginmodule = require("./login/login")
const modulemodel = require('./module1/module1')
const modulemode2 = require('./module2/module2')
const modulemode3 = require('./module3/module3')

app.use("/login", loginmodule)
app.use("/module1", modulemodel)
app.use("/module2", modulemode2)
app.use("/module3", modulemode3)


app.listen(port, (req, res) => {
    console.log(`server is runing ${port}`)
})