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

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};