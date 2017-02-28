'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const Footer = require('./footer'),
      AddTodo = require('./addTodo'),
      TodoList = require('./todoList');

const TodoApp = () => {
  return (

    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>

  );
};

module.exports = TodoApp;
