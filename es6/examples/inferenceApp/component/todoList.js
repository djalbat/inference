'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const dispatcher = require('../dispatcher'),
      TodoListItem = require('./todoListItem');

class TodoList extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      const { addTodo } = update;

      if (addTodo) {
        const update = addTodo,
              { text } = update,
              completed = false;

        this.addChild(

          <TodoListItem text={text} completed={completed} />

        );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (

      <ul>
      </ul>

    );
  }
}

module.exports = TodoList;
