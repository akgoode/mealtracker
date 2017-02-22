'use strict';

const signInSuccess = () => {
  $('#userSignIn').addClass('hide');
  $('#userSignUp').addClass('hide');
  $('.signInForm').val('');
  $('#signInModal').modal('hide');
  $('.meals').removeClass('hide');
  $('.signed-in').removeClass('hide');
};

const signUpSuccess = () => {
  $('.signUpForm').val('');
  $('#signUpModal').modal('hide');
};

const changePasswordSuccess = () => {
  $('.changePasswordForm').val('');
  $('#changePasswordModal').modal('hide');
};

const hideMeals = () => {
  $('.meal-pill').detach();
};

const signOutSuccess = () => {
  hideMeals();
  $('#userSignIn').removeClass('hide');
  $('#signInSubmit').removeClass('hide');
  $('#userSignUp').removeClass('hide');
  $('.signed-in').addClass('hide');
  $('.meals').addClass('hide');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
