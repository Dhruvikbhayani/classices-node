// http://localhost:8400/?uname=skill&upwd=qode
const express = require("express")
const url = require('url')
const app = express()
app.listen(8400, () => {
    console.log(`this port is run 8400`)
})
app.get("/", (req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    res.sendFile(__dirname + "/form.html")
    const qureryobject = url.parse(req.url, true).query
    console.log(qureryobject)
    const uname = qureryobject.uname
    const upwd = qureryobject.upwd
    uname === "skill" && upwd === "qode" ? res.write("<h1>login success</h1>") : res.write("<h1>login file</h1>")
    res.end()
})