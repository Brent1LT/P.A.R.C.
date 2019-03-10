const Validator = require('validator');
const validNum = require('./valid-num');

module.exports = function validateListingInput(data) {
  let errors = {};

  data.latitude = validNum(data.latitude) ? data.latitude : 'no';
  data.longitude = validNum(data.longitude) ? data.longitude : 'no';
  
  if(!isFinite(data.latitude) || (Math.abs(data.latitude) > 90)){
    errors.latitude = 'Not a valid latitude';
  }

  if (!Validator.isEmpty(data.latitude)){
    errors.latitude = 'Latitude is required';
  }
  
  if(!isFinite(data.longitude) || (Math.abs(data.longitude) > 180)){
    errors.longitude = "Not a valude longitude";
  }

  if (!Validator.isEmpty(data.longitude)){
    errors.longitude = 'Longitude is required';
  }

  return {
    errors, 
    isValid: Object.keys(erros).length === 0
  };

};