'use strict';

const constants = require('../constants');

const SHOW_ALL = constants.SHOW_ALL,
      SHOW_ACTIVE = constants.SHOW_ACTIVE,
      SHOW_COMPLETED = constants.SHOW_COMPLETED;

const getVisibleTodos = (todos, filter) => {
  let visibleTodos;

  switch (filter) {
    case SHOW_ALL:
      visibleTodos = todos;
      break;

    case SHOW_ACTIVE:
      visibleTodos = todos.filter((todo) => {
        const { completed } = todo,
              active = !completed;

        return active;
      });
      break;

    case SHOW_COMPLETED:
      visibleTodos = todos.filter((todo) => {
        const { completed } = todo;

        return completed;
      });
      break;
  }

  return visibleTodos;
};

module.exports = getVisibleTodos;
