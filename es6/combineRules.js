'use strict';

const combineRules = (rulesMap) => {
  return (action) => {
    const keys = Object.keys(rulesMap),
          resultsMap = keys.reduce((resultsMap, key) => {
            const rule = rulesMap[key],
                  result = rule(action);

            if (result !== undefined) {
              resultsMap[key] = result;
            }
          }, {});

    return resultsMap;
  };
};

module.exports = combineRules;
