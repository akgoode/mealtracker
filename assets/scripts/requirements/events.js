'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const mealStore = require('../mealsAPI/mealStore.js');

const onCreateRequirement = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  let id = parseInt(data.requirement.id);
  console.log(id);
  let requirement = {
    'requirement': {
      'ingredient_id': id,
      'meal_id': mealStore.meal.id,
      'quantity': parseInt(data.requirement.quantity)
    }
  };
  // mealIng.requirement['ingredient_id'] = ingredient;
  // mealIng.requirement['meal_id'] = meal.meal.id;
  // mealIng.requirement['quantity'] = data.requirement.quantity;

  api.createRequirement(requirement)
    .then((response) => {
      ui.createRequirementSuccess(response);
    })
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
  $('#add-ing-form').on('submit', onCreateRequirement);
};

module.exports = {
  addHandlers,
};
