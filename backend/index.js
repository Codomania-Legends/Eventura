const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const cookieParser = require("cookie-parser")
const { UserRouter } = require("./Routes/user")
const { Restrict_LoginUserOnly } = require("./Middleware/check")
const app = express()

Connect_MongoDB()
app.use( cookieParser() )

app.use( "/restrict/:username" , Restrict_LoginUserOnly , (req,res) => {
    res.send("Login Success")
} )
app.use( "/" , UserRouter )

app.listen( 5000 , () => console.log("Server Started at port 5000") )
