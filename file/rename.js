const fs=require('fs')

fs.rename("rea.txt","read.txt",function(err,data){
   if(err){
       console.log(err)
   }
})