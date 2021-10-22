const mongoose = require("mongoose")
const User = require("../models/Users")

const getHomePage = (req, res) => {
    res.render("home")
}
const getLoginPage = (req, res) => {
    res.render("login")
}
const getSignUpPage = (req, res) => {
    res.render("signup")
}
const handleSignup = (req, res) => {
    console.log(`req.body`, req.body)
    User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => res.render("home", {
            username: req.body.username
        }))
        .catch(err => {
            console.error(err)
            res.status(500).json({
                error: err
            })
        })
}

module.exports = {
    getHomePage,
    getLoginPage,
    getSignUpPage,
    handleSignup
}