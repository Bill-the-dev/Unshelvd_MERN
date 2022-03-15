const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  // group code depending on unlikely collision

  // if (!Validator.isLength(data.category.split(", ").length, { min: 1 })) {
  //   errors.category = 'Category cannot be empty';
  // }

  // if (!Validator.isLength(data.gameType.length, { min: 1 })) {
  //   errors.gameType = 'Game type cannot be empty';
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};