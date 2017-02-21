'use strict';

const showIngredientsTemplate = require('../templates/ingredients.handlebars');

const createIngredientSuccess = () => {
  $('.index-ingredients').removeClass('hide');
  $('.create-ingredient').addClass('hide');
};

const showIngredientSuccess = (data) => {
  console.log(data);
  $('#ingredientid').text(data.ingredient.id);
  $('#ingredientname').text(data.ingredient.name);
  $('#ingredientunit').text(data.ingredient.unit);
};

// const getIngredientSuccess = (data) => {
//
// };

const getAllIngredientsSuccess = (data) => {
  console.log(data);
  // for (let i = 0; i < data.ingredients.length; i++) {
  //   $('#ingredientslist').append("<li>" + data.ingredients[i].id + " " + data.ingredients[i].name + "</li>");
  // }
  let showIngredientsHtml = showIngredientsTemplate({ ingredients: data.ingredients });
  $('.ingredients').append(showIngredientsHtml);

};

const newIngredient = () => {
  $('.index-ingredients').addClass('hide');
  $('.create-ingredient').removeClass('hide');
};

const stageIngredient = (data) => {
  let ingredient = data.ingredient;
  $('#ing-name').val(ingredient.id);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  createIngredientSuccess,
  showIngredientSuccess,
  getAllIngredientsSuccess,
  newIngredient,
  stageIngredient,
  // changePasswordSuccess,
  // signOutSuccess,
};
