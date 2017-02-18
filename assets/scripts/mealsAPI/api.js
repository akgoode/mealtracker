'use strict';

const config = require('../config');
const store = require('../store');
const mealStore = require('./mealStore.js');

const createMeal = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/meals`,
    method: 'POST',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

const showMeal = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/meals/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const destroyMeal = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/meals/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/meals/' + mealStore.meal.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};


// const changePassword = function (data) {
//   return $.ajax({
//     url: `${config.apiOrigin}/change-password/${store.user.id}`,
//     method: 'PATCH',
//     headers: {
//       "Authorization": `Token token=${store.user.token}`
//     },
//     data,
//   });
// };
//
// const signOut = function () {
//   return $.ajax({
//     url: `${config.apiOrigin}/sign-out/${store.user.id}`,
//     method: 'DELETE',
//     headers: {
//       "Authorization": `Token token=${store.user.token}`
//     },
//   });
// };

module.exports = {
  createMeal,
  showMeal,
  destroyMeal,
  update,
  // changePassword,
  // signOut,
};
