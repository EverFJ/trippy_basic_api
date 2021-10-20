const express = require("express")
const app = express()
require("dotenv").config()
const {
    PORT
} = process.env
const hotelsRoutes = require("./routes/hotels")
// let hotels = ["Hilton", "Ritz", "Trianon Palace"]

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use("/hotels", hotelsRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})