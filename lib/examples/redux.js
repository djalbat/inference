'use strict';

var createStore = function createStore(reducer) {
  var state = void 0,
      listeners = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);

    return function () {
      unsubscribe(listener);
    };
  };

  var unsubscribe = function unsubscribe(l) {
    listeners = listeners.filter(function (listener) {
      return listener !== l;
    });
  };

  dispatch();

  return { getState: getState, dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var keys = Object.keys(reducers),
        nextState = keys.reduce(function (nextState, key) {
      var reducer = reducers[key];

      nextState[key] = reducer(state[key], action);

      return nextState;
    }, {});

    return nextState;
  };
};

var redux = { createStore: createStore, combineReducers: combineReducers };

module.exports = redux;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdGF0ZSIsImxpc3RlbmVycyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlcnMiLCJrZXlzIiwiT2JqZWN0IiwibmV4dFN0YXRlIiwicmVkdWNlIiwia2V5IiwicmVkdXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQy9CLE1BQUlDLGNBQUo7QUFBQSxNQUNJQyxZQUFZLEVBRGhCOztBQUdBLE1BQU1DLFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFdBQU9GLEtBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0JKLFlBQVFELFFBQVFDLEtBQVIsRUFBZUksTUFBZixDQUFSOztBQUVBSCxjQUFVSSxPQUFWLENBQWtCLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxVQUFkO0FBQUEsS0FBbEI7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDRCxRQUFELEVBQWM7QUFDOUJMLGNBQVVPLElBQVYsQ0FBZUYsUUFBZjs7QUFFQSxXQUFRLFlBQU07QUFDWkcsa0JBQVlILFFBQVo7QUFDRCxLQUZEO0FBR0QsR0FORDs7QUFRQSxNQUFNRyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCVCxnQkFBWUEsVUFBVVUsTUFBVixDQUFpQixVQUFDTCxRQUFELEVBQWM7QUFDekMsYUFBUUEsYUFBYUksQ0FBckI7QUFDRCxLQUZXLENBQVo7QUFHRCxHQUpEOztBQU1BUDs7QUFFQSxTQUFPLEVBQUVELGtCQUFGLEVBQVlDLGtCQUFaLEVBQXNCSSxvQkFBdEIsRUFBaUNFLHdCQUFqQyxFQUFQO0FBQ0QsQ0EvQkQ7O0FBaUNBLElBQU1HLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3BDLFNBQU8sWUFBd0I7QUFBQSxRQUF2QmIsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLFFBQVhJLE1BQVc7O0FBQzdCLFFBQU1VLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsUUFBWixDQUFiO0FBQUEsUUFDTUcsWUFBWUYsS0FBS0csTUFBTCxDQUFZLFVBQUNELFNBQUQsRUFBWUUsR0FBWixFQUFvQjtBQUMxQyxVQUFNbkIsVUFBVWMsU0FBU0ssR0FBVCxDQUFoQjs7QUFFQUYsZ0JBQVVFLEdBQVYsSUFBaUJuQixRQUFRQyxNQUFNa0IsR0FBTixDQUFSLEVBQW9CZCxNQUFwQixDQUFqQjs7QUFFQSxhQUFPWSxTQUFQO0FBQ0QsS0FOVyxFQU1ULEVBTlMsQ0FEbEI7O0FBU0EsV0FBT0EsU0FBUDtBQUNELEdBWEQ7QUFZRCxDQWJEOztBQWVBLElBQU1HLFFBQVEsRUFBRXJCLHdCQUFGLEVBQWVjLGdDQUFmLEVBQWQ7O0FBRUFRLE9BQU9DLE9BQVAsR0FBaUJGLEtBQWpCIiwiZmlsZSI6InJlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goKTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXg7XG4iXX0=