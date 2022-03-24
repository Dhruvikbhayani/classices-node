const expres = require("express");
const app = expres();
app.listen(5010, () => {
    console.log("port is run")
})
app.get("/home", function(req, res) {
    res.write("Hello")
    res.end();

    // console.log("req.url", req.url)
    // console.log("req.method", req.method)
    // console.log("req.headers", req.headers)
    // console.log("req.query", req.query)
    // console.log("req.body", req.body)

})