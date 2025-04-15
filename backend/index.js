const express = require("express")
const { Connect_MongoDB } = require("./MongoDB/connection")
const app = express()

Connect_MongoDB()
app.get( "/" , ( req , res ) => {
    res.send("hello ")
} )

app.listen( 5000 , () => console.log("Server Started at port 5000") )
