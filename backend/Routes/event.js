const express = require('express');
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../Controllers/event');
const router = express.Router();

router.post('/', createEvent);

router.get('/', getAllEvents);

router.get('/:id', getEventById);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = { eventRouter: router };
