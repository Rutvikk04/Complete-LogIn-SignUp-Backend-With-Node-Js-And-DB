const userData = require("../model/db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Secretkey = require("../Router/data/secret")


const LoginComp = async (req, res) => {
    email = req.body.email;
    password = req.body.password;
    try {
        const ExistingUser = await userData.findOne({ email:email })

        //Comparing Password
        let isMatch = await bcrypt.compare(password, ExistingUser.password)
        if (!isMatch) {
            res.status(404).send("Invalid Credentials")
        }
        else {
            var token = await jwt.sign(ExistingUser.id, Secretkey)

            console.log("TOken:::", token)
            res.cookie('tok', token, {
                expires: new Date(Date.now() + 600000),
                httpOnly:true
            })

            res.status(200).send(JSON.stringify({
                "status":"200",
                "Message":"Logged In Successfully"}))
        }
    }
    catch {
        res.status(404).send(JSON.stringify({
            "status":"404",
            "message":"User Not Found"
        }))
    }
}

module.exports = LoginComp