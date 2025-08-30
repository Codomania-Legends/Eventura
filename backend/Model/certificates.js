const mongoose = require("mongoose");

const winnerSchema = new mongoose.Schema({
  u_id: { type: String, },
  pos: { type: String, enum: ["First", "Runner up"], }
});

const participantSchema = new mongoose.Schema({
  u_id: { type: String }
});

const certificateSchema = new mongoose.Schema({
  eventName: { type: String, required: true, unique: true },
  certificateSelected: { type: String, required: true },
  winners: [winnerSchema],
  participants: [participantSchema]
});

const CERTIFICATE = mongoose.model("Certificate", certificateSchema);

module.exports = CERTIFICATE;
