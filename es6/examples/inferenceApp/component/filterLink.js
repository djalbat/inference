'use strict';

const reaction = require('reaction'),
      necessary = require('necessary');

const constants = require('../constants'),
      dispatcher = require('../dispatcher');

const { React } = reaction,
      { array } = necessary,
      { SET_VISIBILITY_FILTER } = constants;

const FilterLink = (props) => {
  const { children, filter } = props,
        className = `${filter} filter`,
        firstChild = array.first(children),
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
