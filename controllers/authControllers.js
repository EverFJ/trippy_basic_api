const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET || 'supercledechiffrementsuperlongue'


const handleLogin = (req, res) => {
    const token = jwt.sign({
        username: req.body.username
    }, JWT_SECRET)
    res.json(token)
}

module.exports = {
    handleLogin
}