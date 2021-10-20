const express = require("express")
const app = express()
require("dotenv").config()
const {
    PORT
} = process.env
const hotels = ["Hilton", "Ritz", "Trianon Palace"]



app.listen(PORT, () => {
    console.log(`Server running on port ${port}`)
})