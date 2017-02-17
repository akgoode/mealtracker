'use strict';

const createIngredientSuccess = () => {

};

const showIngredientSuccess = (data) => {
  console.log(data);
  $('#ingredientid').text(data.ingredient.id);
  $('#ingredientname').text(data.ingredient.name);
  $('#ingredientunit').text(data.ingredient.unit);
};

const getAllIngredientsSuccess = (data) => {
  console.log(data);
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
  getAllIngredientsSuccess,
  // changePasswordSuccess,
  // signOutSuccess,
};
