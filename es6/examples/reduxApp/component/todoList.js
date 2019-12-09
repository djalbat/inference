'use strict';

const reaction = require('reaction');

const TodoListItems = require('./todoListItems');

const { React } = reaction;

const TodoList = () =>

  <ul>
    <TodoListItems />
  </ul>

;

module.exports = TodoList;
