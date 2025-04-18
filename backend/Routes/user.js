const express = require("express")
const { LoginUser, SignupUser } = require("../Controllers/user")
const UserRouter = express.Router()


UserRouter.post( "/login" , LoginUser )
UserRouter.post( "/signup" , SignupUser )

module.exports = {
    UserRouter
}
