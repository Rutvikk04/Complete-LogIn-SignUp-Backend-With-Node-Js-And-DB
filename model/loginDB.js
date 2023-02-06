const mongoose  = require("mongoose");
const emailCheck = require("email-validator")
const uniqueValidator = require('mongoose-unique-validator')

const LoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate:function(){
            return emailCheck.validate(this.email)
        }
    },
    token:{
        type:String,
    }
})

const LoginDB=mongoose.model("loginDB",LoginSchema)
module.exports =LoginDB