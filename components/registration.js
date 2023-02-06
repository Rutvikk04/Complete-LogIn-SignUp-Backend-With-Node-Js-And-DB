const userData = require("../model/db")

const Registration = async (req, res) => {
    try {
        console.log("registration work", req.body);
        const users = await new userData({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        })
        
     if(this.password===this.cpassword){
            const u1 = await users.save()
            console.log("User Saved Successfully")
            res.status(200).send(JSON.stringify({
            "status":"200",
            "Message":" Registered"}))
        }
        else{
            console.log("Something Went Wrong")
            res.status(400).send(JSON.stringify({
                "Status":"400",
                "Message":"Fill The Form With Right Credentials"}))
        }
    }
    catch (e) {
        res.status(400).send(JSON.stringify({
            "Status":"400",
            "message":"something went wrong"}))
    }

}
module.exports = Registration