require("dotenv").config()
const express = require("express")
const { connectMongoDB } = require("./connect")
const { userRouter } = require("./Routes/user")
const { eventRouter } = require("./Routes/event")
const PORT = process.env.PORT
const app = express()

app.use( express.urlencoded({extended : false}) )

const url = process.env.MONGODB_URL.concat( process.env.DB_NAME )
connectMongoDB(url)

app.use( "/user" , userRouter)
app.use( "/event" , eventRouter )

app.listen( PORT , () => console.log(`Server Started at PORT : ${PORT}`) )
