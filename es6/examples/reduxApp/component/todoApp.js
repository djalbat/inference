'use strict';

const reaction = require('reaction');

const Footer = require('./footer'),
      AddTodo = require('./addTodo'),
      TodoList = require('./todoList');

const { React } = reaction;

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