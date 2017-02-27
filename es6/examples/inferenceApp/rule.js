'use strict';

const combineRules = require('../../combineRules');

const addTodo = require('./rule/addTodo'),
      toggleTodo = require('./rule/toggleTodo'),
      setVisibilityFilter = require('./rule/setVisibilityFilter');

const rule = combineRules({
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  setVisibilityFilter: setVisibilityFilter
});

module.exports = rule;
