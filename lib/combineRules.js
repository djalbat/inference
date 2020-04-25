"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var combineRules = function combineRules(rules) {
  return function (action) {
    var keys = Object.keys(rules),
        update = keys.reduce(function (update, key) {
      var rule = rules[key];
      update[key] = rule(action);
      return update;
    }, {});
    return update;
  };
};

var _default = combineRules;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJpbmVSdWxlcy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUnVsZXMiLCJydWxlcyIsImFjdGlvbiIsImtleXMiLCJPYmplY3QiLCJ1cGRhdGUiLCJyZWR1Y2UiLCJrZXkiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QixTQUFPLFVBQUNDLE1BQUQsRUFBWTtBQUNqQixRQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRixLQUFaLENBQWI7QUFBQSxRQUNNSSxNQUFNLEdBQUdGLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQUNELE1BQUQsRUFBU0UsR0FBVCxFQUFpQjtBQUNwQyxVQUFNQyxJQUFJLEdBQUdQLEtBQUssQ0FBQ00sR0FBRCxDQUFsQjtBQUVBRixNQUFBQSxNQUFNLENBQUNFLEdBQUQsQ0FBTixHQUFjQyxJQUFJLENBQUNOLE1BQUQsQ0FBbEI7QUFFQSxhQUFPRyxNQUFQO0FBQ0QsS0FOUSxFQU1OLEVBTk0sQ0FEZjtBQVNBLFdBQU9BLE1BQVA7QUFDRCxHQVhEO0FBWUQsQ0FiRDs7ZUFlZUwsWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb21iaW5lUnVsZXMgPSAocnVsZXMpID0+IHtcbiAgcmV0dXJuIChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocnVsZXMpLFxuICAgICAgICAgIHVwZGF0ZSA9IGtleXMucmVkdWNlKCh1cGRhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzW2tleV07XG5cbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gcnVsZShhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB1cGRhdGU7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUnVsZXM7XG4iXX0=