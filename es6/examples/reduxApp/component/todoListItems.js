"use strict";

const reaction = require("reaction");

const constants = require("../constants"),
      TodoListItem = require("./todoListItem");

const { React } = reaction,
      { Component } = React,
      { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, TOGGLE_TODO } = constants;

class TodoListItems extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context,
          state = store.getState(),
          { todos, visibilityFilter } = state,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map((visibleTodo) => {
            const { id, text, completed } = visibleTodo;

            return (

              <TodoListItem text={text}
                            completed={completed}
                            clickHandler={() => {
                              const type = TOGGLE_TODO,
                                    action = {
                                      type,
                                      id
                                    };

                              store.dispatch(action);
                            }}
              />

            );
          });

    return items;
  }
}

module.exports = TodoListItems;

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
