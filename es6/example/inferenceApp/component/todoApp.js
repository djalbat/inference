"use strict";

import { React } from "reaction";

import Footer from "./footer";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import dispatcher from "../dispatcher";

import { SHOW_ALL } from "../constants";

const { Component } = React;

export default class TodoApp extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => this.render(update));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update) {
    if (update) {
      const { setVisibilityFilter } = update;

      if (setVisibilityFilter) {
        const { visibilityFilter } = setVisibilityFilter,
              className = `${visibilityFilter} app`;

        this.setClass(className);
      }
    } else {
      const initialVisibilityFilter = SHOW_ALL,
            className = `${initialVisibilityFilter} app`;

      return (

        <div className={className}>
          <AddTodo />
          <TodoList />
          <Footer />
        </div>

      );
    }
  }
}
