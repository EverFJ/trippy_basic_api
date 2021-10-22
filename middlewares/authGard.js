const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    try {
        const token = req.headers.cookie.split("=")[1]
        const decodedToken = jwt.verify(token, JWT_SECRET)
        console.log(`decodedToken`, decodedToken)
        const username = decodedToken.username



        // next()
    } catch {

        res.status(401).json({
            error: "You're not allowed to see this"
        })

    }
}