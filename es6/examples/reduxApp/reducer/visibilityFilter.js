'use strict';

const constants = require('../constants');

const SHOW_ALL = constants.SHOW_ALL,
      SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

const visibilityFilter = (state = SHOW_ALL, action = {}) => {
  const { type } = action;

  switch (type) {
    case SET_VISIBILITY_FILTER:
      const { filter } = action;

      state = filter;
      break;
  }

  return state;
};

module.exports = visibilityFilter;
