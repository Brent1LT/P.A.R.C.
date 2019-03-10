const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

  longitude: {
    type: String
  },

  latitude: {
    type: String
  },

  address: {
    type: String
  },

  price: {
    type: Number,
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