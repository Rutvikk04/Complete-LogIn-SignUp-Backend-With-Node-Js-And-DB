const userData = require("../model/db")


const Search = async (req, res) => {
    const userdata = await userData.find(  {
            "$or": [
                { username : { $regex: req.params.key } },
            ]
        }
    )
    res.send(userdata)
}
module.exports = Search