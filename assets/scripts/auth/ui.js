'use strict';

const signInSuccess = () => {
  $('#signInSubmit').addClass('hide');
  $('#userSignIn').addClass('hide');
  $('#userChangePassword').removeClass('hide');
  $('#sign-out').removeClass('hide');
  $('.signInForm').val('');
  $('#signInModal').modal('hide');
  $('#userSignUp').addClass('hide');
  $('.input-fields').removeClass('hide');
  $('.create').removeClass('hide');
};

const signUpSuccess = () => {
  $('.signUpForm').val('');
  $('#signUpModal').modal('hide');
};

const changePasswordSuccess = () => {
  $('.changePasswordForm').val('');
  $('#changePasswordModal').modal('hide');
};

const signOutSuccess = () => {
  $('#userSignIn').removeClass('hide');
  $('#userChangePassword').addClass('hide');
  $('#sign-out').addClass('hide');
  $('#signInSubmit').removeClass('hide');
  $('#userSignUp').removeClass('hide');
  $('.input-fields').addClass('hide');
  $('.create').addClass('hide');
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
