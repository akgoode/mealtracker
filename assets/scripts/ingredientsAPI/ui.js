'use strict';

const createIngredientSuccess = () => {

};

const showIngredientSuccess = (data) => {
  console.log(data);
  $('#mealid').text(data.meal.id);
  $('#mealname').text(data.meal.name);
  $('#mealinstructions').text(data.meal.instructions);
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
  createIngredientSuccess,
  showIngredientSuccess,
  // changePasswordSuccess,
  // signOutSuccess,
};
