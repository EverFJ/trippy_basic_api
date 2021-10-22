const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
require("dotenv").config()
const exphbs = require("express-handlebars")
const {
    PORT
} = process.env
const port = process.env.PORT || PORT
const db = "mongodb://localhost:27017/sandbox"
const hotelsRoutes = require("./routes/hotels")
const authRoutes = require("./routes/auth")
const homeRoutes = require("./routes/home")
const authGard = require("./middlewares/authGard")

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

app.get("/admin", authGard, (req, res) => res.render("admin"))
app.use("/", homeRoutes)
app.use("/hotels", hotelsRoutes)
app.use("/auth", authRoutes)

mongoose.connect(db, () => {
    console.log(`Mongoose connected to ${db}`)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})