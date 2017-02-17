'use strict';

const config = require('../config');
const store = require('../store');

const createRequirement = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/requirements`,
    method: 'POST',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

const showRequirement = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/requirements/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const destroyRequirement = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/requirements/' + id,
    method: 'DELETE',
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
  createRequirement,
  showRequirement,
  destroyRequirement,
  // changePassword,
  // signOut,
};
