const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  listing: {
    type: Schema.Types.ObjectId,
    ref: 'listings'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  offMarket: {
    type: Boolean,
    default: false
  }
});

module.exports = Booking = mongoose.model('booking', BookingSchema);