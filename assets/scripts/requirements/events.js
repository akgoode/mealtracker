'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const mealStore = require('../mealsAPI/mealStore.js');
const ing = require('../ingredientsAPI/api.js');

const onCreateRequirement = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id = parseInt(data.requirement.id);
  console.log(data.requirement.quantity);
  if (!isNaN(data.requirement.quantity) && data.requirement.quantity !== '0' && data.requirement.quantity !== '') {
    let requirement = {
      'requirement': {
        'ingredient_id': id,
        'meal_id': mealStore.meal.id,
        'quantity': parseInt(data.requirement.quantity)
      }
    };

    api.createRequirement(requirement)
      .then((response) => {
        ing.showIngredient(id)
          .then((ingResponse) => {
            ui.createRequirementSuccess(ingResponse, response);
          })
          ;
      })
      .catch(ui.failure)
      ;
  } else {
    ui.createRequirementFailure();
  }
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
