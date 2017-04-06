'use strict';

const reaction = require('reaction');

const { React } = reaction,
      { Component } = React;

class Provider extends Component {
  getChildContext(context) {
    const { store } = this.props,
          childContext = {
            store: store
          };

    return childContext;
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

module.exports = Provider;
