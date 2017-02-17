'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const store = require('../store');

const onCreateMeal = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  data.meal['user_id'] = store.user.id;
  console.log(data);
  api.createMeal(data)
    .then(ui.createMealSuccess)
    .catch(ui.failure)
    ;
};

// const onSignIn = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signIn(data)
//     .then((response) => {
//       store.user = response.user;
//       return store.user;
//     })
//     .then(ui.signInSuccess)
//     .then(() => {
//       console.log(store);
//     })
//     .catch(ui.failure)
//     ;
// };
//
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
  $('#create-meal-form').on('submit', onCreateMeal);
  // $('#sign-in').on('submit', onSignIn);
  // $('#change-password').on('submit', onChangePassword);
  // $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
