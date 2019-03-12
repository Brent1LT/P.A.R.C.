const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  description:{
    type: String,
    required: true
  },

  lng: {
    type: Number,
    required: true
  },

  lat: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true,
    default: 15
  },

  photo: {
    type: String,
    required: true
  },

  // NOT BOOKING DATE
  // dateTime listing was created
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model('listings', ListingSchema);