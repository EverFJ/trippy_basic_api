const jwt = require("jsonwebtoken")
const Users = require("../models/Users")
const JWT_SECRET = process.env.JWT_SECRET

const handleLogin = (req, res) => {
    Users.findOne({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => {
            if (user) {

                const token = jwt.sign({
                    username: req.body.username
                }, JWT_SECRET)
                res.json(token)
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