'use strict';

const config = require('../config');
const store = require('../store');

const createIngredient = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/ingredients`,
    method: 'POST',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

const showIngredient = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/ingredients/' + id,
    method: 'GET',
  });
};

const getAllIngredients = function () {
  return $.ajax({
    url: config.apiOrigin + '/ingredients/',
    method: 'GET',
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
  createIngredient,
  showIngredient,
  getAllIngredients,
  // changePassword,
  // signOut,
};
