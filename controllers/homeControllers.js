const getHomePage = (req, res) => {
    res.render("home")
}
const getLoginPage = (req, res) => {
    res.render("login")
}
const getSignUpPage = (req, res) => {
    res.render("signup")
}
const getHomePage = (req, res) => {
    res.render("home")
}

module.exports = {
    getHomePage,
    getLoginPage,
    getSignUpPage,

}