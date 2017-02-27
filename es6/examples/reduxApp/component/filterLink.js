'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const constants = require('../constants');

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

    if (active) {
      return (

        <span>{children}</span>

      );
    }

    return (

      <a href='#'
         className="filter"
         onClick={(event) => {

           event.preventDefault();

           const type = SET_VISIBILITY_FILTER,
                 visibilityFilter = filter,
                 action = {
                   type: type,
                   visibilityFilter: visibilityFilter
                 };

           store.dispatch(action);
         }}
      >
        {children}
      </a>
    );
  }
}

module.exports = FilterLink;
