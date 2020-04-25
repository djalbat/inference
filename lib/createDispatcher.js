"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    for (var _len = arguments.length, ruleNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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

  return {
    dispatch: dispatch,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };
};

var _default = createDispatcher;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZURpc3BhdGNoZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlRGlzcGF0Y2hlciIsInJ1bGUiLCJsaXN0ZW5lcnMiLCJkaXNwYXRjaCIsImFjdGlvbiIsInVwZGF0ZSIsImZvckVhY2giLCJsaXN0ZW5lciIsInJ1bGVOYW1lcyIsImxlbmd0aCIsInNvbWUiLCJydWxlTmFtZSIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsIk9iamVjdCIsImFzc2lnbiIsInB1c2giLCJ1bnN1YnNjcmliZSIsImwiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDakMsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE1BQUQsRUFBWTtBQUMzQixRQUFNQyxNQUFNLEdBQUdKLElBQUksQ0FBQ0csTUFBRCxDQUFuQjtBQUVBRixJQUFBQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQUEsVUFDdEJDLFNBRHNCLEdBQ1JELFFBRFEsQ0FDdEJDLFNBRHNCOztBQUc5QixVQUFLQSxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBdEIsSUFBNEJELFNBQVMsQ0FBQ0UsSUFBVixDQUFlLFVBQUNDLFFBQUQ7QUFBQSxlQUFlTixNQUFNLENBQUNNLFFBQUQsQ0FBTixLQUFxQkMsU0FBcEM7QUFBQSxPQUFmLENBQWhDLEVBQWdHO0FBQzlGTCxRQUFBQSxRQUFRLENBQUNGLE1BQUQsQ0FBUjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBVkQ7O0FBWUEsTUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ04sUUFBRCxFQUE0QjtBQUFBLHNDQUFkQyxTQUFjO0FBQWRBLE1BQUFBLFNBQWM7QUFBQTs7QUFDNUNNLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixRQUFkLEVBQXdCO0FBQ3RCQyxNQUFBQSxTQUFTLEVBQVRBO0FBRHNCLEtBQXhCO0FBSUFOLElBQUFBLFNBQVMsQ0FBQ2MsSUFBVixDQUFlVCxRQUFmO0FBRUEsV0FBUTtBQUFBLGFBQU1VLFdBQVcsQ0FBQ1YsUUFBRCxDQUFqQjtBQUFBLEtBQVI7QUFDRCxHQVJEOztBQVVBLE1BQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QmhCLElBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDaUIsTUFBVixDQUFpQixVQUFDWixRQUFEO0FBQUEsYUFBZUEsUUFBUSxLQUFLVyxDQUE1QjtBQUFBLEtBQWpCLENBQVo7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFBRWYsSUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlVLElBQUFBLFNBQVMsRUFBVEEsU0FBWjtBQUF1QkksSUFBQUEsV0FBVyxFQUFYQTtBQUF2QixHQUFQO0FBQ0QsQ0E5QkQ7O2VBZ0NlakIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY3JlYXRlRGlzcGF0Y2hlciA9IChydWxlKSA9PiB7XG4gIGxldCBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCB1cGRhdGUgPSBydWxlKGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgcnVsZU5hbWVzIH0gPSBsaXN0ZW5lcjtcblxuICAgICAgaWYgKChydWxlTmFtZXMubGVuZ3RoID09PSAwKSB8fCBydWxlTmFtZXMuc29tZSgocnVsZU5hbWUpID0+ICh1cGRhdGVbcnVsZU5hbWVdICE9PSB1bmRlZmluZWQpKSkge1xuICAgICAgICBsaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lciwgLi4ucnVsZU5hbWVzKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihsaXN0ZW5lciwge1xuICAgICAgcnVsZU5hbWVzXG4gICAgfSk7XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHVuc3Vic2NyaWJlKGxpc3RlbmVyKSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiAobGlzdGVuZXIgIT09IGwpKTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGF0Y2hlcjtcbiJdfQ==