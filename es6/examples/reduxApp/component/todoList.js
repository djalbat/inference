'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const TodoListItem = require('./todoListItem');

const TodoList = (props) =>  {
  const { todos, todoClickHandler } = props,
        items = todos.map((todo) => {
          const { id, text, completed } = todo;

          return (

            <TodoListItem text={text}
                          completed={completed}
                          clickHandler={() => {

                              todoClickHandler(id);

                          }}
            />

          );
        });

  return (

    <ul>
      {items}
    </ul>

  );
};

module.exports = TodoList;
