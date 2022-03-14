const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGameInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.image = validText(data.image) ? data.image : '';
  
  
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  
  if (Validator.isEmpty(data.image)) {
    errors.image = 'Image field is required';
  }

  if (!Validator.isLength(data.category.length, { min: 1 })) {
    errors.category = 'Category cannot be empty';
  }

  if (!Validator.isLength(data.gameType.length, { min: 1 })) {
    errors.gameType = 'Game type cannot be empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};