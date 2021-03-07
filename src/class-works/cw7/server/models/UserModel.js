const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: password => bcrypt.hashSync(password, SALT),
    select: false
  },
  age: Number
});

UserSchema.methods.signIn = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('user', UserSchema);
