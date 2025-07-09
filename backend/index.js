require("dotenv").config()
const express = require("express")
const { connectMongoDB } = require("./connect")
const { userRouter } = require("./Routes/user")
const { eventRouter } = require("./Routes/event")
const PORT = process.env.PORT
const app = express()
const cors = require("cors")
const { authenticateToken } = require("./Authentication/auth")

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use( express.urlencoded({extended : false}) )
app.use( express.json() )

const url = process.env.MONGODB_URL.concat( process.env.DB_NAME )
connectMongoDB(url)

app.use( "/user" , userRouter)
app.use( "/event" , authenticateToken , eventRouter )

app.listen( PORT , () => console.log(`Server Started at PORT : ${PORT}`) )
