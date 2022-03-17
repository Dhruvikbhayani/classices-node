const mongoose=require('mongoose')

const emschema= new mongoose.Schema({_id:Number,name:String,age:Number,address:String},{versionKey:false});
const emmodel=mongoose.model("employee",emschema)
mongoose.connect("mongodb://localhost/employee")
var newemp=new emmodel({_id:1,name:"Dhruvik",age:22,address:"surat"});
newemp.save(after);
function after(err){
    if(err){
        console.log(err)
    }
    else{ console.log("done")
    }
    mongoose.disconnect();
}