const fs= require('fs')

var a=fs.readFile("read.txt","utf8",function(err,a){
    if(a){ 
        fs.writeFileSync("read1.txt",a,'utf8')
    }
    else{
        console.log(err)
    }
})