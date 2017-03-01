'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const dispatcher = require('../dispatcher'),
      TodoListItem = require('./todoListItem');

class TodoList extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      this.forceUpdate(update);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update = {}) {
    const { addTodo } = update;

    if (addTodo) {
      const { text } = addTodo;

      this.addChild(

        <TodoListItem text={text} />

      );
    } else {
      return (

        <ul>
        </ul>

      );
    }
  }
}

module.exports = TodoList;
