const http = require('http')
const fs = require('fs')

let app = http.createServer((req,res)=>{

    fs.readFile("xyz.txt","utf8",function(err,data){
        if(err){
            res.statusCode(500)
            res.write("unable to read")
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    });
});

app.listen(5020,()=>{
    console.log("listing post5020")
})