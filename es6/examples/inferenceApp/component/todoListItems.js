"use strict";

const reaction = require("reaction");

const dispatcher = require("../dispatcher"),
      TodoListItem = require("./todoListItem");

const { React } = reaction,
      { Component } = React;

class TodoListItems extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => this.updateHandler(update));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update) {
    if (update) {
      let children = this.getChildren();

      const { addTodo } = update,
            { text } = addTodo;

      children = [
        ...children,

          <TodoListItem text={text} />

      ];

      return children;
    }

    return [];
  }
}

const mixins = [
  updateHandler
];

Object.assign(TodoListItems, {
  mixins
});

module.exports = TodoListItems;

function updateHandler(update) {
  if (update) {
    const { addTodo } = update;

    if (addTodo) {
      this.forceUpdate(update);
    }
  }
}
