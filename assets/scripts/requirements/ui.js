'use strict';

const createRequirementSuccess = (ingData, reqData) => {
  let ingredient = ingData.ingredient;
  let requirement = reqData.requirement;
  $('#current-ingredients').append('<li class="new-ing">' + requirement.quantity + ' ' + ingredient.unit + ' of ' + ingredient.name + '</li>');
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
