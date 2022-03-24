const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    if (req.method == "POST") {
        var postparametes = "";
        req.on('data', function(data) {
            postparametes += data;
        });
        req.on('end', function() {
            var postdata = querystring.parse(postparametes)
            console.log(postdata)
            if (postdata['uname'] == "skill" && postdata['upwd'] == "qode") {
                res.write("<h1>Login success</h1>")
            } else {
                res.write("<h1>login fail</h1>")
            }
            res.end()
        })
    }
});
server.listen(5555, () => {
    console.log("server is run")
})