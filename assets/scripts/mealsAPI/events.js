'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const userStore = require('../store');
const mealStore = require('./mealStore.js');

const onCreateMeal = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.meal['user_id'] = userStore.user.id;
  api.createMeal(data)
    .then((response) => {
      mealStore.meal = response.meal;
      return mealStore.meal;
    })
    .then(ui.createMealSuccess)
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
  let data = getFormFields(event.target);
  let id = data.meal.id;
  api.destroyMeal(id)
    .then(ui.destroyMealSuccess)
    .catch(ui.failure)
    ;
};
// const onSignOut = function (event) {
//   event.preventDefault();
//   api.signOut()
//     .then(() => {
//       delete store.user;
//       return store;
//     })
//     .then(ui.signOutSuccess)
//     .catch(ui.failure)
//     ;
// };

const addHandlers = () => {
  $('#create-meal-form').on('submit', onCreateMeal);
  $('#show-meal').on('submit', onShowMeal);
  $('#destroy-meal').on('submit', onDestroyMeal);

  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
