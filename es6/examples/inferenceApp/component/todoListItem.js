"use strict";

import { React } from "reaction";

const { Component } = React;

class TodoListItem extends Component {
  render () {
    const { text } = this.props,
          className = "";

    return (

      <li className={className}
          onClick={() => {

            this.toggleClass("completed");

          }}>
        {text}
      </li>
    );
  }
}

module.exports = TodoListItem;
