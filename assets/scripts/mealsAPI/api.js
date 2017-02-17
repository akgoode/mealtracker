'use strict';

const config = require('../config');
const store = require('../store');

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
  // changePassword,
  // signOut,
};
