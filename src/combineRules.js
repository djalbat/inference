"use strict";

const combineRules = (rules) => {
  return (action) => {
    const keys = Object.keys(rules),
          update = keys.reduce((update, key) => {
            const rule = rules[key];

            update[key] = rule(action);

            return update;
          }, {});

    return update;
  };
};

export default combineRules;
