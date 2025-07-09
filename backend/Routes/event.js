const express = require('express');
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../Controllers/event');
const router = express.Router();

router.post('/', createEvent);

router.get('/', getAllEvents);

router.get('/:hostName', getEventById);

router.put('/:eventName', updateEvent);

router.delete('/:eventName', deleteEvent);

module.exports = { eventRouter: router };
