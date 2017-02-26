'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const FilterLink = require('./filterLink'),
      constants = require('../constants');

const SHOW_ALL = constants.SHOW_ALL,
      SHOW_ACTIVE = constants.SHOW_ACTIVE,
      SHOW_COMPLETED = constants.SHOW_COMPLETED;

const Footer = () => {

  return (

    <p>
      {'Show: '}
      <FilterLink filter={SHOW_ALL}>All</FilterLink>
      {' - '}
      <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
      {' - '}
      <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </p>

  );
};

module.exports = Footer;
