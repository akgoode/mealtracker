'use strict';

const signInSuccess = () => {
  $('#userSignIn').addClass('hide');
  $('#userSignUp').addClass('hide');
  $('.signInForm').val('');
  $('#signInModal').modal('hide');
  $('.meals').removeClass('hide');
  $('.signed-in').removeClass('hide');
  $('#status-bar').text('Sign in successful!');
};

const signUpSuccess = () => {
  $('.signUpForm').val('');
  $('#signUpModal').modal('hide');
  $('#status-bar').text('Sign up successful! Please sign in.');
};

const changePasswordSuccess = () => {
  $('.changePasswordForm').val('');
  $('#changePasswordModal').modal('hide');
  $('#status-bar').text('Change password successful');
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
  $('#status-bar').text('Sign out successful!');
};

const failure = () => {
  $('#status-bar').text('There was an error! Please try again.');
};

const signInFailure = () => {
  $('#signInModal').modal('hide');
  $('.signInForm').val('');
  $('#status-bar').text('Sign in failed! Please try again.');
};

const signUpFailure = () => {
  $('#signUpModal').modal('hide');
  $('.signUpForm').val('');
  $('#status-bar').text('Sign up failed! Please try again.');
};

const changePasswordFailure = () => {
  $('#changePasswordModal').modal('hide');
  $('.changePasswordForm').val('');
  $('#status-bar').text('Change password failed! Please try again.');
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signInFailure,
  signUpFailure,
  changePasswordFailure,
};
