const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 150 },
  text: { type: String, required: true, maxLength: 500 },
  timestamp: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Message', MessageSchema);
