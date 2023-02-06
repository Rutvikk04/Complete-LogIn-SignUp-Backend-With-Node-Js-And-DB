// const cookieParser=require("cookie-parser")


const TokVar = async (req, res, next) => {
    if (!req.cookies.tok) {
        res.redirect("http://127.0.0.1:5500/loginPage.html")
    } else {
        next()
    }
}
