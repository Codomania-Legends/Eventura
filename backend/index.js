require("dotenv").config()
const express = require("express")
const { connectMongoDB } = require("./connect")
const PORT = process.env.PORT
const app = express()

// MongoDB Connection
const url = process.env.MONGODB_URL.concat( process.env.DB_NAME )
connectMongoDB(url)

app.get( "/" , ( req , res ) => {
    res.send("Helllo")
} )

app.listen( PORT , () => console.log(`Server Started at PORT : ${PORT}`) )
