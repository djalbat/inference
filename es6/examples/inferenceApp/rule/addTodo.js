'use strict';

const constants = require('../constants');

const { ADD_TODO } = constants;

const addTodo = (action = {}) => {
  const { type } = action;

  let update;

  switch (type) {
    case ADD_TODO :
      const { text } = action;

      update = {
        text
      };
      break;
  }

  return update;
};

module.exports = addTodo;
