const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  duration: { type: String },
  limitedSeats: { type: Boolean, default: false },
  hostName : { type : String },
  image : {type : String},
  impressions : { type : Number },
  volunteers: [{ type: String }], 
  chiefGuest: { type: String },
  specialMembers: [{ type: String }],
  eventOutlines: [{ type: String }],
  registrations: [{ type: String }],
  attendance: [{ type: String }],
});

const EVENT = mongoose.model('Event', eventSchema);

module.exports = { EVENT };
