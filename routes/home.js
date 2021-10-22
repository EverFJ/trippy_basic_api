const express = require("express")
const router = express.Router()
const homeControllers = require("../controllers/homeControllers")

router.get("/", homeControllers.getHomePage)
router.get("/login", homeControllers.getLoginPage)
router.get("/signup", homeControllers.getSignUpPage)
router.post("/signup", homeControllers.handleSignup)

module.exports = router