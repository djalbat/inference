'use strict';

const createDispatcher = (rule) => {
  let listenersMap = {};

  const dispatch = (action) => {
    const resultsMap = rule(action),
          keys = Object.keys(resultsMap);

    keys.forEach((key) => {
      const listeners = listenersMap[key];

      if (listeners) {
        const result = resultsMap[key];

        listeners.forEach((listener) => listener(result));
      }
    });
  };

  const subscribe = (key, listener) => {
    const listeners = listenersMap[key] || [];

    listeners.push(listener);

    listenersMap[key] = listeners;
  };

  const unsubscribe = (key, l) => {
    let listeners = listenersMap[key] || [];

    listeners = listeners.filter((listener) => {
      return (listener !== l);
    });

    if (listeners) {
      listenersMap[key] = listeners;
    } else {
      delete listenersMap[key];
    }
  };

  return { dispatch, subscribe, unsubscribe };
};

module.exports = createDispatcher;
