'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const dispatcher = require('../dispatcher'),
      TodoListItem = require('./todoListItem');

class TodoList extends Component {
  getInitialState() {
    const todos = [],
          initialState = {
            todos: todos
          };

    return initialState;
  }

  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      const { addTodo } = update;

      if (addTodo) {
        let { todos } = this.state;

        update = addTodo;

        todos = addTodoToTodos(todos, update);

        this.state = Object.assign(this.state, {
          todos: todos
        });
      }
      if (addTodo) {
        this.forceUpdate();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { todos } = this.state,
          items = todos.map((todo) => {
            const { text, completed } = todo;

            return (

              <TodoListItem text={text} completed={completed} />

            );
          });

    return (

      <ul>
        {items}
      </ul>

    );
  }
}

module.exports = TodoList;

const addTodoToTodos = (todos, update) => {
  const { id, text } = update,
        completed = false,
        todo = {
          id: id,
          text: text,
          completed: completed
        };

  todos = [
    ...todos,
    todo
  ];

  return todos;
};
