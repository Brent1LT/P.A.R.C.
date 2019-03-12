const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateListingInput(data) {
  console.log('from validator', data)
  let errors = {};

  data.description = validText(data.description) ? data.description : '';

  if(!Validator.isLength(data.description, {min: 5, max: 255})){
    errors.description = 'Description must be between 5 and 255 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  if(!isFinite(data.lat) || (Math.abs(data.lat) > 90)){
    errors.lat = 'Not a valid latitude';
  }

  if (Validator.isEmpty(data.lat)){
    errors.lat = 'Latitude is required';
  }
  
  if(!isFinite(data.lng) || (Math.abs(data.lng) > 180)){
    errors.lng = "Not a valid longitude";
  }

  if (Validator.isEmpty(data.lng)){
    errors.lng = 'Longitude is required';
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0
  };

};