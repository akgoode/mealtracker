'use strict';

const showIngredientsTemplate = require('../templates/ingredients.handlebars');

const createIngredientSuccess = () => {
  $('#ingredients-modal').modal('hide');
  $('.ingredient-form').val('');
};

const showIngredientSuccess = (data) => {
  $('#ingredientid').text(data.ingredient.id);
  $('#ingredientname').text(data.ingredient.name);
  $('#ingredientunit').text(data.ingredient.unit);
};

const getAllIngredientsSuccess = (data) => {
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
};
