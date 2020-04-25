"use strict";

const Redux = require("./redux");

const todos = require("./reducer/todos"),
      visibilityFilter = require("./reducer/visibilityFilter");

const { combineReducers } = Redux;

const reducer = combineReducers({
  todos,
  visibilityFilter
});

module.exports = reducer;
