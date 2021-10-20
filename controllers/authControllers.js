const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET || 'supercledechiffrementsuperlongue'


const handleLogin = (req, res) => {
    console.log(`JWT_SECRET`, JWT_SECRET)
    const token = jwt.sign({
        username: req.body.username
    }, JWT_SECRET)
    res.json(token)
}

module.exports = {
    handleLogin
}