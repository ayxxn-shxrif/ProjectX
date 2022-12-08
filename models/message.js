const mongoose = require('mongoose');
const { format } = require('date-fns');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 150 },
  text: { type: String, required: true, maxLength: 500 },
  timestamp: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

MessageSchema.virtual('date_formatted').get(function () {
  return format(this.timestamp, 'd MMMM yyyy');
});

module.exports = mongoose.model('Message', MessageSchema);
