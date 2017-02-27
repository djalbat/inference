'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

const Link = require('./link'),
      constants = require('../constants'),
      dispatcher = require('../dispatcher');

const SHOW_ALL = constants.SHOW_ALL,
      SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

class FilterLink extends Component {
  getInitialState() {
    const visibilityFilter = SHOW_ALL,
          initialState = {
            visibilityFilter: visibilityFilter
          };

    return initialState;
  }

  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      const { setVisibilityFilter } = update;

      if (setVisibilityFilter) {
        const { visibilityFilter } = update;

        this.state = Object.assign(this.state, {
          visibilityFilter: visibilityFilter
        });

        this.forceUpdate()
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { visibilityFilter } = this.state,
          { children, filter } = this.props,
          active = (filter === visibilityFilter);

    return (

      <Link active={active}
            clickHandler={() => {
              const type = SET_VISIBILITY_FILTER,
                    visibilityFilter = filter,
                    action = {
                      type: type,
                      visibilityFilter: visibilityFilter
                    };

              dispatcher.dispatch(action);
            }}
      >
        {children}
      </Link>

    );
  }
}

module.exports = FilterLink;
