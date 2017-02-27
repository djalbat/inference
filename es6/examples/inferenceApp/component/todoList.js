'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const constants = require('../constants'),
      dispatcher = require('../dispatcher'),
      TodoListItem = require('./todoListItem'),
      getVisibleTodos = require('../helper/getVisibleTodos');

const SHOW_ALL = constants.SHOW_ALL,
      TOGGLE_TODO = constants.TOGGLE_TODO;

class TodoList extends Component {
  getInitialState() {
    const visibilityFilter = SHOW_ALL,
          todos = [],
          initialState = {
            todos: todos,
            visibilityFilter: visibilityFilter
          };

    return initialState;
  }

  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      const { addTodo, toggleTodo, setVisibilityFilter } = update;

      if (addTodo) {
        let { todos } = this.state;

        update = addTodo;

        todos = addTodoToTodos(todos, update);

        this.state = Object.assign(this.state, {
          todos: todos
        });
      }

      if (toggleTodo) {
        let { todos } = this.state;

        update = toggleTodo;

        todos = toggleTodos(todos, update);

        this.state = Object.assign(this.state, {
          todos: todos
        });
      }

      if (setVisibilityFilter) {
        update = setVisibilityFilter;

        const { visibilityFilter } = update;

        this.state = Object.assign(this.state, {
          visibilityFilter: visibilityFilter
        });
      }

      if (addTodo || toggleTodo || setVisibilityFilter) {
        this.forceUpdate()
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { todos, visibilityFilter } = this.state,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map((visibleTodo) => {
            const { text, completed, id } = visibleTodo,
                  item =  <TodoListItem text={text}
                                        completed={completed}
                                        clickHandler={() => {
                                          const type = TOGGLE_TODO,
                                                action = {
                                                  type: type,
                                                  id: id
                                                };

                                          dispatcher.dispatch(action);
                                        }}
                          />;

            return item;
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

const toggleTodos = (todos, update) => {
  const { id } = update;

  todos = todos.map((todo) => {
    if (todo.id === id) {
      let { completed } = todo;

      completed = !completed;

      todo.completed = completed;
    }

    return todo;
  });

  return todos;
};
