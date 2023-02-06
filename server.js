
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const url = "mongodb://127.0.0.1:27017/RegistrationData"
const router = require("./Router/Routes")
const cors = require('cors')
const cookieParser = require("cookie-parser")

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const connectDb = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(url).then(() => console.log("Database connected Successfully"))
}


app.use("/", router)

app.listen(4321, (req, res) => {
    console.log("server started on port 4321")
    connectDb()
})
