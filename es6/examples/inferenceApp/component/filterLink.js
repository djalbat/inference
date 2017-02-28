'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const constants = require('../constants'),
      dispatcher = require('../dispatcher');

const SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

const FilterLink = (props) => {
  const { children, filter } = props,
        className = `${filter} filter`,
        firstChild = first(children),
        text = firstChild.getText();

  return (

    <div className={className}>
      <a href='#'
         onClick={(event) => {

           event.preventDefault();

           const type = SET_VISIBILITY_FILTER,
                 visibilityFilter = filter,
                 action = {
                   type: type,
                   visibilityFilter: visibilityFilter
                 };

           dispatcher.dispatch(action);
         }}
      >
        {text}
      </a>
      <span>
        {text}
      </span>
    </div>
  );
};

module.exports = FilterLink;

const first = array => array[0];
