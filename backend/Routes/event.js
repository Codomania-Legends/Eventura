const express = require('express');
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../Controllers/event');
const { RegisterForEvent, SaveEventForSaved, SaveEventForLiked } = require('../Controllers/register');
const router = express.Router();

router.post('/', createEvent);

router.get('/', getAllEvents);

router.post( "/register" , RegisterForEvent )
router.post( "/save" , SaveEventForSaved )
router.post( "/like" , SaveEventForLiked )

router.get('/:hostName', getEventById);

router.put('/:eventName', updateEvent);

router.delete('/:eventName', deleteEvent);

module.exports = { eventRouter: router };
