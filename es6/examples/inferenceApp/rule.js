"use strict";

import { combineRules } from "../../index";

import addTodo from "./rule/addTodo";
import setVisibilityFilter from "./rule/setVisibilityFilter";

const rule = combineRules({
  addTodo,
  setVisibilityFilter
});

module.exports = rule;
