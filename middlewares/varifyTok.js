const Secretkey = require("../Router/data/secret")
const LoginComp=require('../components/login')
const jwt=require('jsonwebtoken')


const varifyTok = async (req, res, next) => {
   
    const tokk=await req.cookies.tok
    jwt.verify(tokk , Secretkey, (e) => {
        if (e) {
            res.status(400).send("Need To Login First")
        }else{
        next()
        }
    }
    )
}

module.exports = varifyTok
