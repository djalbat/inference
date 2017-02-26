'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const TodoListItem = (props) => {
  const { onClick, completed, text } = props,
        textDecoration = completed ?
                          'line-through' :
                            'none',
        style = {
          textDecoration: textDecoration
        };

  return (

    <li style={style}
        onClick={onClick}
    >
      {text}
    </li>
  );

};

module.exports = TodoListItem;
