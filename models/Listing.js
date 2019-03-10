const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  longitude: {
    type: Number
  },

  latitude: {
    type: Number
  },

  price: {
    type: Number,
    required: true,
    default: 15
  },

  // NOT BOOKING DATE
  // dateTime listing was created
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model('listings', ListingSchema);