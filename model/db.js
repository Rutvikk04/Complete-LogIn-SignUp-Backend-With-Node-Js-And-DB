const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const uniqueValidator = require('mongoose-unique-validator')
const emailCheck = require("email-validator")


const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailCheck.validate(this.email)
        }
    },
    gender: {
        type: String,
        possibleValues: ['male', 'female']
    },
    password: {
        type: String,
        required: true
    }
    
})

DataSchema.pre('save', async function (next) { // pre is mongoose middleware//takes action before saving data as we mentioned//more middlewares on website
    try {
        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(this.password, 10)
        this.password = hashpass
        next()
    } catch (e) {
        console.log("error", err)
    }
})
try {
    DataSchema.plugin(uniqueValidator)
} catch (e) {
    res.send("invalid or used credentiels")
}




const userData = mongoose.model("userData", DataSchema)
module.exports = userData