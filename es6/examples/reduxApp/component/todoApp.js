'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const Footer = require('./footer'),
      AddTodo = require('./addTodo'),
      VisibleTodoList = require('./visibleTodoList');

const TodoApp = () => {
  return (

    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>

  );
};

module.exports = TodoApp;
