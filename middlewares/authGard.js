const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const mongoose = require("mongoose")
const Users = require("../models/Users")

module.exports = (req, res, next) => {

    const token = req.headers.cookie.split("=")[1]
    const decodedToken = jwt.verify(token, JWT_SECRET)
    // console.log(`decodedToken`, decodedToken)
    const username = decodedToken.username
    Users.findOne({
            username: username
        })
        .then(user => next())
        .catch(err => {
            res.status(401).json({
                message: "You're not allowed to see this",
                error: err
            })
        })
}