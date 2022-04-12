const express = require('express')
var multer = require('multer')
var app = express()

var filestorange = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        // cb(null, file.fieldname + '_' + Date.now() + file.originalname)
        cb(null, file.origin2alname)
    }
})
var uploads = multer({ storage: filestorange })

app.post("/file", uploads.single("images"), (req, res) => {
    res.json({ "msg": "fileuploade" })
})


app.listen(5010, (req, res) => {
    console.log("server is run")
})