'use strict';

const mealStore = require('./mealStore.js');
const mealTemplate = require('../templates/meal-pill.handlebars');
const events = require('./events.js');

const createMealSuccess = () => {
  $('.create-meal-title').text(mealStore.meal.name);
  $('#create-meal-form').addClass('hide');
  $('#add-ing-form').removeClass('hide');
  $('.current-ingredients').removeClass('hide');
};

const showMealSuccess = (data) => {
  let meal = data.meal;
  $('.show-meal-title').text(meal.name);
  for(let i = 0; i < meal.ingredients.length; i++) {
    let currentIngredient = meal.ingredients[i];
    for(let j = 0; j < meal.requirements.length; j++) {
      let currentRequirement = meal.requirements[j];
      if (currentIngredient.id === currentRequirement.ingredient_id) {
        $('#show-current-ingredients').append('<li class="ing">' + currentRequirement.quantity + ' ' + currentIngredient.unit + ' of ' + currentIngredient.name + '</li>');
      }
    }
  }

  // for (let i = 0; i < meal.requirements.length; i++) {
  //   let currentRequirement = meal.requirements[i];
  //   let ingredient = currentRequirement.ingredient_id;
  //   $('#show-current-ingredients').append('<li class="ing">' + currentRequirement.quantity + ' ' + meal.ingredients[ingredient] + ' of ' + currentIngredient.name + '</li>');
  // }
  $('#show-instructions').text(data.meal.instructions);
};

const doneAddingSuccess = () => {
  $('#add-ing-form').addClass('hide');
  $('.instructions').removeClass('hide');
};

const resetMealForm = () => {
  $('.create-meal-form').val('');
  $('.new-ing').detach();
  $('.create-meal-title').text('Create meal');
  if(!$('#add-ing-form').hasClass('hide')) {
    $('#add-ing-form').addClass('hide');
  }
  if(!$('.instructions').hasClass('hide')) {
    $('.instructions').addClass('hide');
  }
  if(!$('.current-ingredients').hasClass('hide')) {
    $('.current-ingredients').addClass('hide');
  }
  if($('#create-meal-form').hasClass('hide')) {
    $('#create-meal-form').removeClass('hide');
  }
  $('#create-meal-modal').modal('hide');
};

const destroyMealSuccess = () => {
  console.log("success");
};

const getMealsSuccess = function(data) {
  console.log("success");
  let mealHTML = mealTemplate({ meals: data.meals });
  $('#meal-list').append(mealHTML);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  createMealSuccess,
  showMealSuccess,
  destroyMealSuccess,
  doneAddingSuccess,
  resetMealForm,
  getMealsSuccess,
  // changePasswordSuccess,
  // signOutSuccess,
};
