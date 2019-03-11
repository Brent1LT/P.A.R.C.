const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBookingInput(data) {
  let errors = {};

  if (!validator.isEmpty(data.startDate)) {
    errors.text = "Must choose start date";
  }

  if (!validator.isEmpty(data.startDate)) {
    errors.text = "Must choose end date";
  }

  let startDate = new Date(data.startDate);
  let endDate = new Date(data.endDate);
  if (Date(endDate) < Date(startDate)) {
    errors.text = "Start date must be before end date";
  }

  let currentDate = new Date();
  if (currentDate > startDate) {
    errors.text = "Booking must start today or in the future.";
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};