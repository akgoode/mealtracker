'use strict';

const mealStore = require('./mealStore.js');
const mealTemplate = require('../templates/meal-pill.handlebars');
const events = require('./events.js');
const showMealTemplate = require('../templates/meal-card.handlebars');
const ingEvents = require('../ingredientsAPI/events.js');

const createMealSuccess = () => {
  $('.create-meal-title').text(mealStore.meal.name);
  $('#create-meal-form').addClass('hide');
  $('#add-ing-form').removeClass('hide');
  $('.list-ingredients').removeClass('hide');
  $('.ingredients').removeClass('hide');
  ingEvents.getAllIngredients();
};

const hideMeals = () => {
  $('.meal-cards').empty();
};

const showMealSuccess = (data) => {
  hideMeals();
  $('#current-meal').detach();
  let meal = data.meal;
  let mealCard = showMealTemplate({meal});
  $('#show-meal-body').append(mealCard);
};

const doneAddingSuccess = () => {
  $('#add-ing-form').addClass('hide');
  $('.instructions').removeClass('hide');
  $('.ingredients').addClass('hide');
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

const getMealsSuccess = function(data) {
  console.log("success");
  $('.meal-pill').detach();
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
  doneAddingSuccess,
  resetMealForm,
  getMealsSuccess,
  hideMeals,
  // changePasswordSuccess,
  // signOutSuccess,
};
