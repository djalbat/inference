'use strict';

const reaction = require('reaction');

const { React } = reaction;

const TodoListItem = (props) => {
  const { clickHandler, completed, text } = props,
        textDecoration = completed ?
                          'line-through' :
                            'none',
        style = {
          textDecoration: textDecoration
        };

  return (

    <li style={style}
        onClick={clickHandler}
    >
      {text}
    </li>
  );

};

module.exports = TodoListItem;
