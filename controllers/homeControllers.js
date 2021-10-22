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
    res.json(req.body)
}

module.exports = {
    getHomePage,
    getLoginPage,
    getSignUpPage,
    handleSignup
}