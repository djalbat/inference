'use strict';

const constants = require('../constants');

const TOGGLE_TODO = constants.TOGGLE_TODO;

const toggleTodo = (action = {}) => {
  const { type, id } = action;

  let update;

  switch (type) {
    case TOGGLE_TODO :
      update = {
        id: id
      };
      break;
  }

  return update;
};

module.exports = toggleTodo;
