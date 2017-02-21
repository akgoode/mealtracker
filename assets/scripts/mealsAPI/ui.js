'use strict';

const mealStore = require('./mealStore.js');
const mealTemplate = require('../templates/meal-pill.handlebars');
const events = require('./events.js');
const showMealTemplate = require('../templates/meal-card.handlebars');

const createMealSuccess = () => {
  $('.create-meal-title').text(mealStore.meal.name);
  $('#create-meal-form').addClass('hide');
  $('#add-ing-form').removeClass('hide');
  $('.current-ingredients').removeClass('hide');
};

const showMealSuccess = (data) => {
  let meal = data.meal;
  let mealCard = showMealTemplate({meal});
  $('.meal-cards').append(mealCard);
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
  $('.meal-pill').detach();
  let mealHTML = mealTemplate({ meals: data.meals });
  $('#meal-list').append(mealHTML);
};

const hideMeals = () => {
  $('.meal-cards').empty();
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
  hideMeals,
  // changePasswordSuccess,
  // signOutSuccess,
};
