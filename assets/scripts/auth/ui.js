'use strict';

const signInSuccess = () => {
  // $('#signInSubmit').addClass('hide');
  $('#userSignIn').addClass('hide');
  $('#userSignUp').addClass('hide');

  // $('#userChangePassword').removeClass('hide');
  // $('#sign-out').removeClass('hide');
  $('.signInForm').val('');
  $('#signInModal').modal('hide');
  $('.meals').removeClass('hide');
  // $('.create').removeClass('hide');
  // $('#index-ingredients').removeClass('hide');
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
