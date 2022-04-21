const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors())

app.use(express.json())

var mongoexpressreq = require("mongo-express-req")
app.use(mongoexpressreq(process.env.CONNECTION_URL))

const module1 = require('./getmethod')
app.use("/product", module1)


const module2 = require('./postmethod')
app.use("/post", module2)

const module3 = require('./update')
app.use("/update", module3)

const module4 = require('./delete')
app.use("/delete", module4)

const port = process.env.PORT || 5010
app.listen(port, () => {
    console.log(`srever is run ${port}`)
})

//mongodb+srv://DhruvikBhayani:<password>@dhruvik.0qfcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://DhruvikBhayani:admin@dhruvik.0qfcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority