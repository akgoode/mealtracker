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

const indexMeals = function () {
  return $.ajax({
    url: config.apiOrigin + '/meals/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
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

module.exports = {
  createMeal,
  showMeal,
  destroyMeal,
  update,
  indexMeals,
  // changePassword,
  // signOut,
};
