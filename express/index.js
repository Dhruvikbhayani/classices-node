const expres = require("express");
const app = expres();
app.listen(5010, () => {
    console.log("port is run")
})
app.get("/", function(req, res) {
    res.write("Hello")
    res.end();
})