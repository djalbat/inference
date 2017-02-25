'use strict';

const createStore = (reducer) => {
  let state,
      listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => {
        return (l !== listener);
      });
    }
  };

  dispatch();

  return { getState, dispatch, subscribe };
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const keys = Object.keys(reducers),
        nextState = keys.reduce((nextState, key) => {
          const reducer = reducers[key];

          nextState[key] = reducer(state[key], action);
        }, {});

    return nextState;
  };
};

const redux = { createStore, combineReducers };

module.exports = redux;
