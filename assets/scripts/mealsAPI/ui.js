'use strict';

const mealStore = require('./mealStore.js');
const mealTemplate = require('../templates/meal-pill.handlebars');
const showMealTemplate = require('../templates/meal-card.handlebars');
const ingEvents = require('../ingredientsAPI/events.js');

const createMealSuccess = () => {
  $('.create-meal-title').text(mealStore.meal.name);
  $('#create-meal-form').addClass('hide');
  $('#add-ing-form').removeClass('hide');
  $('.list-ingredients').removeClass('hide');
  $('.ingredients').removeClass('hide');
  ingEvents.getAllIngredients();
  $('#status-bar').text(mealStore.meal.name + ' successfully created');
};

const hideMeals = () => {
  $('.meal-pill').detach();
};

const showMealSuccess = (data) => {
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
  if(!$('.list-ingredients-ingredients').hasClass('hide')) {
    $('.list-ingredients').addClass('hide');
  }
  if(!$('.ingredients').hasClass('hide')) {
    $('.ingredients').addClass('hide');
  }
  if($('#create-meal-form').hasClass('hide')) {
    $('#create-meal-form').removeClass('hide');
  }
  $('#create-meal-modal').modal('hide');
  $('#status-bar').text('');
};

const getMealsSuccess = function(data) {
  $('.meal-pill').detach();
  let mealHTML = mealTemplate({ meals: data.meals });
  $('#meal-list').append(mealHTML);
  $('#status-bar').text('Showing ' + data.meals.length + ' meals');
};

const failure = () => {
  $('#status-bar').text('Meal action failed.');

};

module.exports = {
  failure,
  createMealSuccess,
  showMealSuccess,
  doneAddingSuccess,
  resetMealForm,
  getMealsSuccess,
  hideMeals,
};
