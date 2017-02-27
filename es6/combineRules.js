'use strict';

const combineRules = (rulesMap) => {
  return (action) => {
    const keys = Object.keys(rulesMap),
          updates = keys.reduce((updates, key) => {
            const rule = rulesMap[key],
                  update = rule(action);

            if (update !== undefined) {
              updates[key] = update;
            }
          }, {});

    return updates;
  };
};

module.exports = combineRules;
