const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const cookieParser = require("cookie-parser")
const { UserRouter } = require("./Routes/user")
const { Restrict_LoginUserOnly } = require("./Middleware/check")
const app = express()
require("dotenv").config()
// require("dotenv").config({ path : "./Service/security.env" })
const PORT = process.env.PORT

Connect_MongoDB()
app.use( express.urlencoded({extended : false}) )
app.use( express.json() )
app.use( cookieParser() )

app.get( "/restrict/:username" , Restrict_LoginUserOnly , (req,res) => {
    res.send("Login Success")
} )
app.use( "/" , UserRouter )

app.listen( PORT , () => console.log(`Server Started at port ${PORT}`) )
