'use strict';

const reaction = require('reaction');

const FilterLink = require('./filterLink'),
      constants = require('../constants');

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = constants,
      { React } = reaction;

const Footer = () =>

  <p>
    {'Show: '}
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {' - '}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {' - '}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>

;

module.exports = Footer;
