'use strict';

const showIngredientsTemplate = require('../templates/ingredients.handlebars');

const createIngredientSuccess = (data) => {
  console.log(data);
};

const showIngredientSuccess = (data) => {
  console.log(data);
  $('#ingredientid').text(data.ingredient.id);
  $('#ingredientname').text(data.ingredient.name);
  $('#ingredientunit').text(data.ingredient.unit);
};

const getIngredientSuccess = (data) => {

};

const getAllIngredientsSuccess = (data) => {
  console.log(data);
  // for (let i = 0; i < data.ingredients.length; i++) {
  //   $('#ingredientslist').append("<li>" + data.ingredients[i].id + " " + data.ingredients[i].name + "</li>");
  // }
  let showIngredientsHtml = showIngredientsTemplate({ ingredients: data.ingredients });
  $('#allingredients').append(showIngredientsHtml);

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
