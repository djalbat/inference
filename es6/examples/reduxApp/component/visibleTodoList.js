'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const TodoList = require('./todoList'),
      constants = require('../constants');

const SHOW_ALL = constants.SHOW_ALL,
      SHOW_ACTIVE = constants.SHOW_ACTIVE,
      SHOW_COMPLETED = constants.SHOW_COMPLETED,
      TOGGLE_TODO = constants.TOGGLE_TODO;

class VisibleTodoList extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context,
          state = store.getState(),
          { todos, visibilityFilter } = state,
          visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (

        <TodoList todos={visibleTodos}
                  todoClickHandler={(id) => {
                    const type = TOGGLE_TODO,
                          action = {
                            type: type,
                            id: id
                          };

                    store.dispatch(action);
                  }}
        />

    );
  }
}

module.exports = VisibleTodoList;

const getVisibleTodos = (todos, visibilityFilter) => {
  let visibleTodos;

  switch (visibilityFilter) {
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
