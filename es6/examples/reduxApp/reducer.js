'use strict';

const Redux = require('../redux'),
      { combineReducers } = Redux;

const todos = require('./reducer/todos'),
      visibilityFilter = require('./reducer/visibilityFilter');

const reducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

module.exports = reducer;
