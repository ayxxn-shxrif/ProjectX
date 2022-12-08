const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 50 },
  password: { type: String, required: true },
  name: { type: String, required: true, maxLength: 100 },
  surname: { type: String, required: true, maxLength: 100 },
  is_member: { type: Boolean, default: false },
});

UserSchema.virtual('full_name').get(function () {
  const name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
  const surname = this.surname.charAt(0).toUpperCase() + this.surname.slice(1);
  return `${name} ${surname}`;
});

module.exports = mongoose.model('User', UserSchema);
