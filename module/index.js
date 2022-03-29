const express = require('express')
const app = express()
const port = 5040
let usermodule = require('./usermodule')
let adminmodule = require('./admin')
let managermodule = require('./manager')

app.use("/user", usermodule)
app.use('/admin', adminmodule)
app.use('/manager', managermodule)

app.listen(port, () => {
    console.log(`server is run port ${port}`)
})