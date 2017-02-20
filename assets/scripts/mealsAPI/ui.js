'use strict';

const mealStore = require('./mealStore.js');
const mealTemplate = require('../templates/meal-pill.handlebars');

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

const doneAddingSuccess = () => {
  $('#add-ing-form').addClass('hide');
  $('.instructions').removeClass('hide');
};

const resetMealForm = () => {
  $('.create-meal-form').val('');
  $('.new-ing').detach();
  $('.create-meal-title').text('Create meal');
  if(!$('#add-ing-form').hasClass('hide')) {
    $('#add-ing-form').addClass('hide');
  }
  if(!$('.instructions').hasClass('hide')) {
    $('.instructions').addClass('hide');
  }
  if(!$('.current-ingredients').hasClass('hide')) {
    $('.current-ingredients').addClass('hide');
  }
  if($('#create-meal-form').hasClass('hide')) {
    $('#create-meal-form').removeClass('hide');
  }
  $('#create-meal-modal').modal('hide');
};

const destroyMealSuccess = () => {
  console.log("success");
};

const getMealsSuccess = (data) => {
  let mealHTML = mealTemplate({ meals: data.meals });
  $('#meal-list').append(mealHTML);
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
  doneAddingSuccess,
  resetMealForm,
  getMealsSuccess,
  // changePasswordSuccess,
  // signOutSuccess,
};
