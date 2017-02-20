'use strict';

const createRequirementSuccess = (ingData, reqData) => {
  let ingredient = ingData.ingredient;
  let requirement = reqData.requirement;
  console.log(requirement);
  $('#current-ingredients').append('<li class="new-ing">' + requirement.quantity + ' ' + ingredient.unit + ' of ' + ingredient.name + '</li>');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  createRequirementSuccess,
  // showMealSuccess,
  // destroyMealSuccess,
  // changePasswordSuccess,
  // signOutSuccess,
};
