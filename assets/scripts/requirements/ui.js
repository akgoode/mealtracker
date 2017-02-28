'use strict';

const ingTemplate = require('../templates/add-ing.handlebars');

const createRequirementSuccess = (ingData, reqData) => {
  let ingredient = ingData.ingredient;
  let requirement = reqData.requirement;
  let ing = ingTemplate({ingredient, requirement});
  $('#current-ingredients').append(ing);
};

const createRequirementFailure = () => {
  $('#ing-name').val('Try again');
  $('#ing-quant').val('');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  createRequirementSuccess,
  createRequirementFailure,
};
