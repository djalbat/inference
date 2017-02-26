'use strict';

const createDispatcher = (rule) => {
  let listeners = [];

  const dispatch = (action) => {
    const result = rule(action);

    listeners.forEach((listener) => listener(result));
  };

  const subscribe = (key, listener) => {
    listeners.push(listener);
  };

  const unsubscribe = (l) => {
    listeners = listeners.filter((listener) => { return (listener !== l); });
  };

  return { dispatch, subscribe, unsubscribe };
};

module.exports = createDispatcher;
