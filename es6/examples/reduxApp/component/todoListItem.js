"use strict";

import { React } from "reaction";

const TodoListItem = (props) => {
  const { clickHandler, completed, text } = props,
        textDecoration = completed ?
                          "line-through" :
                            "none",
        style = {
          textDecoration
        };

  return (

    <li style={style} onClick={clickHandler}>
      {text}
    </li>
  );

};

module.exports = TodoListItem;
