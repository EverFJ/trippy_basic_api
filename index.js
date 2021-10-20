const express = require("express")
const app = express()
require("dotenv").config()
const exphbs = require("express-handlebars")
const path = require("path")
const {
    PORT
} = process.env
const port = process.env.PORT || PORT
const hotelsRoutes = require("./routes/hotels")
const authRoutes = require("./routes/auth")
// let hotels = ["Hilton", "Ritz", "Trianon Palace"]

app.engine("hbs", exphbs({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts")
}))
app.set("view engine", "hbs")
app.set("views", "views")

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use("/hotels", hotelsRoutes)
app.use("/auth", authRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})