const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/authControllers")

router.post("/login", authControllers.handleLogin)

module.exports = router