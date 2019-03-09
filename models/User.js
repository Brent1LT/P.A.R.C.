const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  username: {
    type: String,
    required: true
  },
  
  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = User = mongoose.model("users", UserSchema);