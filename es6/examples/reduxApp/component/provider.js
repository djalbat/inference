'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

class Provider extends Component {
  getChildContext(context) {
    const { store } = this.props;

    return ({
      store: store
    });
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

module.exports = Provider;
