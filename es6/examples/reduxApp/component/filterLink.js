'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const Link = require('./link'),
      constants = require('../constants');

const SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context,
          state = store.getState(),
          { visibilityFilter } = state,
          { children, filter } = this.props,
          active = (filter === visibilityFilter);

    return (

      <Link active={active}
            onClick={() => {
              const type = SET_VISIBILITY_FILTER;

              store.dispatch({
                type: type,
                filter: filter
              });
            }}
      >
        {children}
      </Link>

    );
  }
}

module.exports = FilterLink;
