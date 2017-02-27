'use strict';

const constants = require('../constants');

const ADD_TODO = constants.ADD_TODO;

const addTodo = (action = {}) => {
  const { type, id, text } = action;

  let update;

  switch (type) {
    case ADD_TODO :
      update = {
        id: id,
        text: text
      };
      break;
  }

  return update;
};

module.exports = addTodo;
