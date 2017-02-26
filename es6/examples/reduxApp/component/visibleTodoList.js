'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const TodoList = require('./todoList'),
      constants = require('../constants'),
      getVisibleTodos = require('../helper/getVisibleTodos');

const TOGGLE_TODO = constants.TOGGLE_TODO;

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
                  onTodoClick={(id) => {
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
