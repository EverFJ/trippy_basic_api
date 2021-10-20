const express = require("express")
const app = express()
require("dotenv").config()
const {
    PORT
} = process.env
const port = process.env.PORT || PORT
const hotelsRoutes = require("./routes/hotels")
// let hotels = ["Hilton", "Ritz", "Trianon Palace"]

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use("/hotels", hotelsRoutes)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})