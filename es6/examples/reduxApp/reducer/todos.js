'use strict';

const constants = require('../constants');

const ADD_TODO = constants.ADD_TODO,
      TOGGLE_TODO = constants.TOGGLE_TODO;

const todos = (state = [], action = {}) => {
  const { type } = action;

  switch (type) {
    case ADD_TODO:
      const todo = newTodo(action);

      state = [
        ...state,
        todo
      ];
      break;

    case TOGGLE_TODO:
      state = state.map((todo) => {
        todo = toggleTodo(todo, action);

        return todo;
      });
      break;
  }

  return state;
};

module.exports = todos;

const newTodo = (action) => {
  const { id, text } = action,
        completed = false,
        todo = {
          id: id,
          text: text,
          completed: completed
        };

  return todo;
};

const toggleTodo = (todo, action) => {
  const { id } = action;

  if (todo.id === id) {
    let { completed } = todo;

    completed = !completed;

    todo.completed = completed;
  }

  return todo;
};
