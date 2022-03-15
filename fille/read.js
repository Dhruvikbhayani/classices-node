const fs = require("fs")
fs.readFile("rea.txt","utf8",write)
function write(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Hello ravi")
    }
}