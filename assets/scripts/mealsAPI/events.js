'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const mealStore = require('./mealStore.js');

const onCreateMeal = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createMeal(data)
    .then((response) => {
      mealStore.meal = response.meal;
      return mealStore.meal;
    })
    .then(ui.createMealSuccess)
    .catch(ui.failure)
    ;
};

const onGetMeals = function (event) {
  event.preventDefault();
  api.indexMeals()
    .then(ui.getMealsSuccess)
    .catch(ui.failure)
    ;
};

const onShowMeal = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = data.meal.id;
  api.showMeal(id)
    .then(ui.showMealSuccess)
    .catch(ui.failure)
    ;
};

const onDestroyMeal = function (event) {
  event.preventDefault();
  api.destroyMeal(event.target.data_id)
    .then(ui.destroyMealSuccess)
    .then((event) => {
      $(event.target.data_id).remove();
    })
    .catch(ui.failure)
    ;
};

const onUpdateInstructions = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let meal = {
    'meal': {
      'instructions': data.meal.instructions
    }
  };
  api.update(meal)
    .then(ui.resetMealForm)
    .catch(ui.failure)
    ;
};

const addHandlers = () => {
  $('#create-meal-form').on('submit', onCreateMeal);
  $('#show-meal').on('submit', onShowMeal);
  $('#destroy-meal').on('submit', onDestroyMeal);
  $('#instructions-form').on('submit', onUpdateInstructions);
  $('#done-adding').on('click', ui.doneAddingSuccess);
  $('#close-meal-modal').on('click', ui.resetMealForm);
  $('#index-meals').on('click', onGetMeals);
  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
  onDestroyMeal,
};
