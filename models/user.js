const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true, maxLength: 100 },
  surname: { type: String, required: true, maxLength: 100 },
  is_member: { type: Boolean, required: true },
});

UserSchema.virtual('full_name').get(function () {
  return `${this.name} ${this.surname}`;
});

module.exports = mongoose.model('User', UserSchema);
