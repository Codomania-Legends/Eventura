const express = require("express")
const { SignupReqRes, LoginReqRes, GetAllLikedEvents, GetAllSavedEvents } = require("../Controllers/user")
const { authenticateToken } = require("../Authentication/auth")
const userRouter = express.Router()

userRouter.post( "/signup" , SignupReqRes )
userRouter.post( "/login" , authenticateToken , LoginReqRes )
userRouter.get( "/liked" , GetAllLikedEvents  )
userRouter.get( "/saved" , GetAllSavedEvents )

module.exports = { userRouter }
