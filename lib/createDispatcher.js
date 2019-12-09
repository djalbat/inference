'use strict';

var createDispatcher = function createDispatcher(rule) {
  var listeners = [];

  var dispatch = function dispatch(action) {
    var update = rule(action);

    listeners.forEach(function (listener) {
      var ruleNames = listener.ruleNames;


      if (ruleNames.length === 0 || ruleNames.some(function (ruleName) {
        return update[ruleName] !== undefined;
      })) {
        listener(update);
      }
    });
  };

  var subscribe = function subscribe(listener) {
    for (var _len = arguments.length, ruleNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      ruleNames[_key - 1] = arguments[_key];
    }

    Object.assign(listener, {
      ruleNames: ruleNames
    });

    listeners.push(listener);

    return function () {
      return unsubscribe(listener);
    };
  };

  var unsubscribe = function unsubscribe(l) {
    listeners = listeners.filter(function (listener) {
      return listener !== l;
    });
  };

  return { dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

module.exports = createDispatcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jcmVhdGVEaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURpc3BhdGNoZXIiLCJydWxlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJydWxlTmFtZXMiLCJsZW5ndGgiLCJzb21lIiwicnVsZU5hbWUiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmUiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLE1BQUlDLFlBQVksRUFBaEI7O0FBRUEsTUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBWTtBQUMzQixRQUFNQyxTQUFTSixLQUFLRyxNQUFMLENBQWY7O0FBRUFGLGNBQVVJLE9BQVYsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQUEsVUFDdEJDLFNBRHNCLEdBQ1JELFFBRFEsQ0FDdEJDLFNBRHNCOzs7QUFHOUIsVUFBS0EsVUFBVUMsTUFBVixLQUFxQixDQUF0QixJQUE0QkQsVUFBVUUsSUFBVixDQUFlLFVBQUNDLFFBQUQ7QUFBQSxlQUFlTixPQUFPTSxRQUFQLE1BQXFCQyxTQUFwQztBQUFBLE9BQWYsQ0FBaEMsRUFBZ0c7QUFDOUZMLGlCQUFTRixNQUFUO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FWRDs7QUFZQSxNQUFNUSxZQUFZLFNBQVpBLFNBQVksQ0FBQ04sUUFBRCxFQUE0QjtBQUFBLHNDQUFkQyxTQUFjO0FBQWRBLGVBQWM7QUFBQTs7QUFDNUNNLFdBQU9DLE1BQVAsQ0FBY1IsUUFBZCxFQUF3QjtBQUN0QkM7QUFEc0IsS0FBeEI7O0FBSUFOLGNBQVVjLElBQVYsQ0FBZVQsUUFBZjs7QUFFQSxXQUFRO0FBQUEsYUFBTVUsWUFBWVYsUUFBWixDQUFOO0FBQUEsS0FBUjtBQUNELEdBUkQ7O0FBVUEsTUFBTVUsY0FBYyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QmhCLGdCQUFZQSxVQUFVaUIsTUFBVixDQUFpQixVQUFDWixRQUFEO0FBQUEsYUFBZUEsYUFBYVcsQ0FBNUI7QUFBQSxLQUFqQixDQUFaO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLEVBQUVmLGtCQUFGLEVBQVlVLG9CQUFaLEVBQXVCSSx3QkFBdkIsRUFBUDtBQUNELENBOUJEOztBQWdDQUcsT0FBT0MsT0FBUCxHQUFpQnJCLGdCQUFqQiIsImZpbGUiOiJjcmVhdGVEaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURpc3BhdGNoZXI7XG4iXX0=