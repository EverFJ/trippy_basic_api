const express = require("express")
const app = express()
require("dotenv").config()
const {
    PORT
} = process.env
const hotelsRoutes = require("./routes/hotels")
const hotels = ["Hilton", "Ritz", "Trianon Palace"]

app.use(express.urlencoded({
    extended: false
}))

app.use("/hotels", hotelsRoutes)


app.listen(PORT, () => {
    console.log(`Server running on port ${port}`)
})