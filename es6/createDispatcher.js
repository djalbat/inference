'use strict';

const createDispatcher = (rule) => {
  let listeners = [];

  const dispatch = (action) => {
    const update = rule(action);

    listeners.forEach((listener) => listener(update));
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      unsubscribe(listener);
    };
  };

  const unsubscribe = (l) => {
    listeners = listeners.filter((listener) => { return (listener !== l); });
  };

  return { dispatch, subscribe, unsubscribe };
};

module.exports = createDispatcher;
