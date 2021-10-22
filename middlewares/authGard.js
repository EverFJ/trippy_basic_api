const jwt = require("jsonwebtoken")

const authGard = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(`token`, token)


        // next()
    } catch {
        res.status(401).json({
            error: new Error("Invalid request !")
        })

    }
}

module.exports = authGard