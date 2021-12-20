"use strict";

import { React } from "reaction";

import dispatcher from "../dispatcher";
import TodoListItem from "./todoListItem";

const { Component } = React;

export default class TodoListItems extends Component {
  updateHandler(update) {
    if (update) {
      const { addTodo } = update;

      if (addTodo) {
        this.forceUpdate(update);
      }
    }
  }

  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => this.updateHandler(update));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update) {
    if (update) {
      let children = this.getChildren();

      const { addTodo } = update,
            { text } = addTodo;

      children = [
        ...children,

          <TodoListItem text={text} />

      ];

      return children;
    }

    return [];
  }
}
