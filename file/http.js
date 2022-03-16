
const http = require('http')

var app = http.createServer((req, res) => {
    res.setHeader("content-Type", "text/html")
    res.write("Hello");
    res.write("<h1>Course</h1>")
    res.write("<h1>nodejs</h1>")
    res.write("request Url" + req.url);
    res.write("request method" + req.method)
    res.end();
});
app.listen(5000, () => {
    console.log("lisiting 5050")
});