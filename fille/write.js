const fs = require("fs")
var jay="Hello jay ho"  
fs.writeFile("rea.txt",jay,"utf8",write)
function write(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Hello ravi")
    }
}