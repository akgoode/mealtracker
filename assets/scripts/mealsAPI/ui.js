'use strict';

const mealStore = require('./mealStore.js');

const createMealSuccess = () => {
  $('.create-meal-title').text(mealStore.meal.name);
  $('#create-meal-form').addClass('hide');
  $('#add-ing-form').removeClass('hide');
  $('.current-ingredients').removeClass('hide');
};

const showMealSuccess = (data) => {
  console.log(data);
  $('#mealid').text(data.meal.id);
  $('#mealname').text(data.meal.name);
  $('#mealinstructions').text(data.meal.instructions);
  $('#mealingredients').text(data.meal.ingredients);
};

const destroyMealSuccess = () => {
  console.log("success");
};

// const signUpSuccess = () => {
//   $('.signUpForm').val('');
//   $('#signUpModal').modal('hide');
// };
//
// const changePasswordSuccess = () => {
//   $('.changePasswordForm').val('');
//   $('#changePasswordModal').modal('hide');
// };
//
// const signOutSuccess = () => {
//   $('#userSignIn').removeClass('hide');
//   $('#userChangePassword').addClass('hide');
//   $('#sign-out').addClass('hide');
//   $('#signInSubmit').removeClass('hide');
//   $('#userSignUp').removeClass('hide');
// };
//
const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  createMealSuccess,
  showMealSuccess,
  destroyMealSuccess,
  // changePasswordSuccess,
  // signOutSuccess,
};
