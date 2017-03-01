'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const Footer = require('./footer'),
      AddTodo = require('./addTodo'),
      TodoList = require('./todoList'),
      constants = require('../constants'),
      dispatcher = require('../dispatcher');

const SHOW_ALL = constants.SHOW_ALL;

class TodoApp extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      this.forceUpdate(update);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update = {}) {
    const { setVisibilityFilter } = update;

    if (setVisibilityFilter) {
      const { visibilityFilter } = setVisibilityFilter,
            className = `${visibilityFilter} app`;

      this.setClass(className);
    } else {
      const initialVisibilityFilter = SHOW_ALL,
            className = `${initialVisibilityFilter} app`;

      return (

        <div className={className}>
          <AddTodo />
          <TodoList />
          <Footer />
        </div>

      );
    }
  }
}

module.exports = TodoApp;
