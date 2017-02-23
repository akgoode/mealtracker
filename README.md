
# Meal Tracker

  Deployed Website: https://akgoode.github.io/mealtracker/

### by Andrew Goode

## Back End

  Repository: 'http://github.com/akgoode/meals-api'
  Heroku url: 'https://arcane-bayou-43528.herokuapp.com/'

## Overview

  Meal Tracker is essentially a cookbook app, that allows the user to create and view meals using ingredients stored in a shared database of ingredients to which all users can contribute.  Even though ingredients are shared among all users, each meal that a user creates is only viewable to them, and they are the only one that can delete it.

  In the future, I hope to add several features to Meal Tracker.  Most importantly is the ability to add meals to a schedule, so that the user can create a meal plan for a week.  Based on the requirements for each meal, the app would then be able to generate a shopping list of the total ingredients that the user would need to buy at the store.  A goal that is much farther down the line is to implement a pantry in which the user could track what is currently in their house.  Upon the user input that says a meal is complete the app would make the required adjustments to the pantry so that the shopping list generator would create a more accurate shopping list.

  I also want the user to be able to create a meal and add a date and time to it so that they can go back and view their past history of meals.  In the future, perhaps a calorie attribute could be added to the ingredients table so that users could track their total number of calories eaten.  This feature plus the meal-planning feature would enable the user to create a realistic calorie goal for themselves and use the app to create a shopping list that would help them adhere to that goal.

## Origins

  I created this app because my fiancee and I are trying to eat better, and at the same time I want to exert less effort creating a shopping list each week.  By planning out meals and buying the proper ingredients for those meals it is much easier to stick to the plan.

## User Experience

  Upon page load, the user has the option to sign up or sign in.  If they do not have an account, they need to sign in after signing up.  From there, they have the option to create meals or to add ingredients to the database.  Once they have created a meal, it will automatically populate in the meal list div in the middle of the page.  They then have the option to view the "meal-card" of the meal, which displays the meal in a nice format, or to delete the meal from their list.

  At this moment, while a user can create and destroy a meal, they cannot update one that already exists.  To do this, they would have to delete the current meal and make it over again from scratch.

## User Stories

  - As a user, I want to be able to create an account.
  - As a user, I want to be able to change my password.
  - As a user, I want to be able to sign out and have my data disappear from the page.
  - As a user, I want to be able to own a meal.
  - As a user, I want to be able to create my own meal.
  - As a user, I want to have access to a list of ingredients I can add to my meals.
  - As a user, I want to be able to add an ingredient to my list of available ingredients.
  - As a user, I want to be able to delete a meal that I have created.
  - As a user, I don't want anyone else to see my meals.

## Wireframes

  Rough outline of page: http://imgur.com/kcYlLcN
  Early ERD: http://imgur.com/crWbuiR
