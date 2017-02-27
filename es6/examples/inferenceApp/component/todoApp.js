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
      const { setVisibilityFilter } = update;

      if (setVisibilityFilter) {
        const update = setVisibilityFilter,
              { visibilityFilter } = update,
              className = `${visibilityFilter} app`;

        this.setClass(className);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
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

module.exports = TodoApp;
