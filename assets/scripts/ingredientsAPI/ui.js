'use strict';

const showIngredientsTemplate = require('../templates/ingredients.handlebars');

const createIngredientSuccess = (data) => {
  $('#ingredients-modal').modal('hide');
  $('.ingredient-form').val('');
  $('#status-bar').text(data.ingredient.name + ' successfully added');
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

const stageIngredient = (data) => {
  let ingredient = data.ingredient;
  $('#ing-name').val(ingredient.id);
  $('#ing-quant').val('');
};

const failure = () => {
  $('#status-bar').text('Ingredient action failed.');
};

module.exports = {
  failure,
  createIngredientSuccess,
  showIngredientSuccess,
  getAllIngredientsSuccess,
  stageIngredient,
};
