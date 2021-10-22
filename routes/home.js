const express = require("express")
const router = express.Router()
const homeControllers = require("../controllers/homeControllers")

app.get("/", homeControllers.getHomePage)
app.get("/login", homeControllers.getLoginPage)
app.get("/signup", (req, res) => res.render("signup"))
app.post("/signup")

module.exports = router