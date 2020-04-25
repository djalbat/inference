"use strict";

const combineRules = require("../../combineRules");

const addTodo = require("./rule/addTodo"),
      setVisibilityFilter = require("./rule/setVisibilityFilter");

const rule = combineRules({
  addTodo,
  setVisibilityFilter
});

module.exports = rule;
