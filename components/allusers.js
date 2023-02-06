const userData = require("../model/db")

const AllUsers=async (req,res)=>{
    const Users=await userData.find()
    res.json(Users)
}
module.exports=AllUsers