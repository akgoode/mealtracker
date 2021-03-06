'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const events = require('./auth/events.js');
const mealEvents = require('./mealsAPI/events.js');
const ingEvents = require('./ingredientsAPI/events.js');
const reqEvents = require('./requirements/events.js');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
$(() => {
  events.addHandlers();
  mealEvents.addHandlers();
  ingEvents.addHandlers();
  reqEvents.addHandlers();
});
