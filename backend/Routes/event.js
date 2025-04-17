const express = require("express")
const { handlePostEvent } = require("../Controllers/event")
const EventRouter = express.Router()

EventRouter.post( "/" , handlePostEvent  )

module.exports = {
    EventRouter
}
