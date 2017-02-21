'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
// const store = require('../store');

const onCreateIngredient = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createIngredient(data)
    .then(ui.createIngredientSuccess)
    .catch(ui.failure)
    ;
};

const onShowIngredient = function (event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  api.showIngredient(id)
    .then(ui.stageIngredient)
    .catch(ui.failure)
    ;
};

const onAddIngredient = function (id) {
  api.showIngredient(id)
    .then((response) => {
      return response;
    })
    .catch(ui.failure)
    ;
};

const onGetAllIngredients = function (event) {
  event.preventDefault();
  api.getAllIngredients()
    .then(ui.getAllIngredientsSuccess)
    .catch(ui.failure)
    ;
};

const getAllIngredients = function () {
  api.getAllIngredients()
    .then(ui.getAllIngredientsSuccess)
    .catch(ui.failure)
    ;
};

// const onChangePassword = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.failure)
//     ;
// };
//
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
  $('#create-ingredient-form').on('submit', onCreateIngredient);
  $('#show-ingredient').on('submit', onShowIngredient);
  $('#index-all-ingredients').on('click', onGetAllIngredients);
  $('#create-ingredient').on('click', ui.newIngredient);
  $('.ingredients').on('click', '.select-ing', onShowIngredient);
  // $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
  onAddIngredient,
  getAllIngredients,
};
