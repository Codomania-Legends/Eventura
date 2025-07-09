const express = require("express")
const { SignupReqRes, LoginReqRes } = require("../Controllers/user")
const { authenticateToken } = require("../Authentication/auth")
const userRouter = express.Router()

userRouter.post( "/signup" , SignupReqRes )
userRouter.post( "/login" , authenticateToken , LoginReqRes )

module.exports = { userRouter }
