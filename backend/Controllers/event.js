const { EVENT } = require('../Model/event');
const { CheckForDuplicateEVentName } = require('../Services/event');

const createEvent = async (req, res) => {
  try {
    console.log("Got " , req.body)
    const { eventName } = req.body
    const duplicateCheck = await CheckForDuplicateEVentName({eventName})
    if( !duplicateCheck ) throw new Error( "Event Name already Taken" )
    const event = new EVENT(req.body);
    await event.save();
    res.status(201).json({ message: 'EVENT created successfully', event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await EVENT.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    // Find by eventName instead of _id
    const {hostName} = req.params
    const event = await EVENT.findOne({ hostName });
    if (!event) return res.status(404).json({ message: 'EVENT not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await EVENT.findByIdAndUpdate(req.params.eventName, req.body, { new: true });
    if (!event) return res.status(404).json({ message: 'EVENT not found' });
    res.status(200).json({ message: 'EVENT updated', event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await EVENT.findByIdAndDelete(req.params.eventName);
    if (!event) return res.status(404).json({ message: 'EVENT not found' });
    res.status(200).json({ message: 'EVENT deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
