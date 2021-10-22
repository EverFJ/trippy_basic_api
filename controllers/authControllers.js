const jwt = require("jsonwebtoken")
const Users = require("../models/Users")
const JWT_SECRET = process.env.JWT_SECRET

const handleLogin = (req, res) => {
    console.log(`req.body.username`, req.body.username)
    console.log(`req.body.password`, req.body.password)
    Users.findOne({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => {
            console.log(`user`, user)
            if (user) {
                const token = jwt.sign({
                    username: req.body.username
                }, JWT_SECRET, {
                    expiresIn: "24h"
                })
                res.status(200).json({
                    userId: user._id,
                    token: token
                })
            } else {
                res.render("home", {
                    message: "Sorry, username or password are wrong !!!"
                })

            }
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({
                error: err
            })

        })

}

module.exports = {
    handleLogin
}