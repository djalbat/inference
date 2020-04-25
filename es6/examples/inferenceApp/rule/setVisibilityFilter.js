"use strict";

import { SET_VISIBILITY_FILTER } from "../constants";

const setVisibilityFilter = (action = {}) => {
  const { type } = action;

  let update;

  switch (type) {
    case SET_VISIBILITY_FILTER :
      const { visibilityFilter } = action;

      update = {
        visibilityFilter
      };
      break;
  }

  return update;
};

export default setVisibilityFilter;
