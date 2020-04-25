"use strict";

const reaction = require("reaction");

const Footer = require("./footer"),
      AddTodo = require("./addTodo"),
      TodoList = require("./todoList"),
      constants = require("../constants"),
      dispatcher = require("../dispatcher");

const { SHOW_ALL } = constants,
      { React } = reaction,
      { Component } = React;

class TodoApp extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => this.render(update));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update) {
    if (update) {
      const { setVisibilityFilter } = update;

      if (setVisibilityFilter) {
        const { visibilityFilter } = setVisibilityFilter,
              className = `${visibilityFilter} app`;

        this.setClass(className);
      }
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
