"use strict";

const createDispatcher = (rule) => {
  let listeners = [];

  const dispatch = (action) => {
    const update = rule(action);

    listeners.forEach((listener) => {
      const { ruleNames } = listener;

      if ((ruleNames.length === 0) || ruleNames.some((ruleName) => (update[ruleName] !== undefined))) {
        listener(update);
      }
    });
  };

  const subscribe = (listener, ...ruleNames) => {
    Object.assign(listener, {
      ruleNames
    });

    listeners.push(listener);

    return (() => unsubscribe(listener));
  };

  const unsubscribe = (l) => {
    listeners = listeners.filter((listener) => (listener !== l));
  };

  return { dispatch, subscribe, unsubscribe };
};

export default createDispatcher;
