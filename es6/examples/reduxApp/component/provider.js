"use strict";

import { React } from "reaction";

const { Component } = React;

class Provider extends Component {
  getChildContext(context) {
    const { store } = this.props,
          childContext = {
            store
          };

    return childContext;
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

module.exports = Provider;
