const express = require("express")
const { LoginUser } = require("../Controllers/user")
const UserRouter = express.Router()


UserRouter.get( "/:username" , LoginUser )

module.exports = {
    UserRouter
}
