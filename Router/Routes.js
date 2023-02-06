const express = require("express")
const router = express.Router()
const varifyTok = require("../middlewares/varifyTok")
const Registration = require("../components/registration")
const Search = require("../components/search")
const LoginComp = require("../components/login")

const cors = require('cors')
const passport = require('passport')
const AllUsers = require("../components/allusers")




router.use(passport.initialize())
router.use(cors())

require('../PassAuth/intPass')

router.get("/allusers", AllUsers)

router.post("/register", Registration)

router.get(`/search/:key`, Search)

router.post("/login", LoginComp)


//page only for Aunthenticated Users Only 
router.get('/secretpage', varifyTok, (req, res) => {
    res.status(200).send(JSON.stringify({
        "Status": "200",
        "Message": "Welcome To User Page"
    }))
})

router.get('/userProfile', passport.authenticate('jwt', { session: true }), (req, res) => {
    res.status(200).send({
        success: "true",
        user: {
            id: req.user.id,
            name: req.user.username
        }
    })
})

module.exports = router