const http = require('http')
const url= require('url')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    const qureryobject=url.parse(req.url,true).query
    console.log(qureryobject)
    const uname=qureryobject.uname
    const upwd=qureryobject.upwd
    uname==="skill" && upwd==="qode"?res.write("<h1>login success</h1>"): res.write("<h1>login file</h1>")
    res.end()
})

server.listen(5050,()=>{
    console.log("This port is run")
})