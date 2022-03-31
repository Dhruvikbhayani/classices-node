const mongoose = require('mongoose')
const emschema = new mongoose.Schema({ name: String, age: Number, address: String });
const emmodel = mongoose.model("emploee", emschema)
mongoose.connect("mongodb://localhost/skillqode")
var newemp = new emmodel([{ name: "jainam", age: 55, address: "ahmedabad" },
    // { name: "jaldip", age: 55, address: "ahmedabad" },
    // { name: "jainam", age: 55, address: "ahmedabad" }
]);
newemp.save(after);

function after(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("done")
    }
    mongoose.disconnect();
}
// newemp.upate({ name: "jainam" }, { $set: {} })