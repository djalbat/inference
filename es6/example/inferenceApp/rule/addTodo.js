"use strict";

import { ADD_TODO } from "../constants";

export default function addTodo(action = {}) {
  const { type } = action;

  let update;

  switch (type) {
    case ADD_TODO :
      const { text } = action;

      update = {
        text
      };
      break;
  }

  return update;
}
