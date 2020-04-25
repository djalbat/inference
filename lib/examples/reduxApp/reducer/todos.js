"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;
  var todos = state;

  switch (type) {
    case _constants.ADD_TODO:
      todos = addTodoToTodos(todos, action);
      break;

    case _constants.TOGGLE_TODO:
      todos = toggleTodos(todos, action);
      break;
  }

  state = todos;
  return state;
};

var _default = todos;
exports["default"] = _default;

var addTodoToTodos = function addTodoToTodos(todos, action) {
  var id = action.id,
      text = action.text,
      completed = false,
      todo = {
    id: id,
    text: text,
    completed: completed
  };
  todos = [].concat(_toConsumableArray(todos), [todo]);
  return todos;
};

var toggleTodos = function toggleTodos(todos, action) {
  var id = action.id;
  todos = todos.map(function (todo) {
    if (todo.id === id) {
      var completed = todo.completed;
      completed = !completed;
      todo.completed = completed;
    }

    return todo;
  });
  return todos;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPRE8iLCJhZGRUb2RvVG9Ub2RvcyIsIlRPR0dMRV9UT0RPIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxpQkFBNkI7QUFBQSxNQUE1QkMsS0FBNEIsdUVBQXBCLEVBQW9CO0FBQUEsTUFBaEJDLE1BQWdCLHVFQUFQLEVBQU87QUFBQSxNQUNqQ0MsSUFEaUMsR0FDeEJELE1BRHdCLENBQ2pDQyxJQURpQztBQUd6QyxNQUFJSCxLQUFLLEdBQUdDLEtBQVo7O0FBRUEsVUFBUUUsSUFBUjtBQUNFLFNBQUtDLG1CQUFMO0FBQ0VKLE1BQUFBLEtBQUssR0FBR0ssY0FBYyxDQUFDTCxLQUFELEVBQVFFLE1BQVIsQ0FBdEI7QUFDQTs7QUFFRixTQUFLSSxzQkFBTDtBQUNFTixNQUFBQSxLQUFLLEdBQUdPLFdBQVcsQ0FBQ1AsS0FBRCxFQUFRRSxNQUFSLENBQW5CO0FBQ0E7QUFQSjs7QUFVQUQsRUFBQUEsS0FBSyxHQUFHRCxLQUFSO0FBRUEsU0FBT0MsS0FBUDtBQUNELENBbEJEOztlQW9CZUQsSzs7O0FBRWYsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDTCxLQUFELEVBQVFFLE1BQVIsRUFBbUI7QUFBQSxNQUNoQ00sRUFEZ0MsR0FDbkJOLE1BRG1CLENBQ2hDTSxFQURnQztBQUFBLE1BQzVCQyxJQUQ0QixHQUNuQlAsTUFEbUIsQ0FDNUJPLElBRDRCO0FBQUEsTUFFbENDLFNBRmtDLEdBRXRCLEtBRnNCO0FBQUEsTUFHbENDLElBSGtDLEdBRzNCO0FBQ0xILElBQUFBLEVBQUUsRUFBRkEsRUFESztBQUVMQyxJQUFBQSxJQUFJLEVBQUpBLElBRks7QUFHTEMsSUFBQUEsU0FBUyxFQUFUQTtBQUhLLEdBSDJCO0FBU3hDVixFQUFBQSxLQUFLLGdDQUNBQSxLQURBLElBRUhXLElBRkcsRUFBTDtBQUtBLFNBQU9YLEtBQVA7QUFDRCxDQWZEOztBQWlCQSxJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUCxLQUFELEVBQVFFLE1BQVIsRUFBbUI7QUFBQSxNQUM3Qk0sRUFENkIsR0FDdEJOLE1BRHNCLENBQzdCTSxFQUQ2QjtBQUdyQ1IsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDRCxJQUFELEVBQVU7QUFDMUIsUUFBSUEsSUFBSSxDQUFDSCxFQUFMLEtBQVlBLEVBQWhCLEVBQW9CO0FBQUEsVUFDWkUsU0FEWSxHQUNFQyxJQURGLENBQ1pELFNBRFk7QUFHbEJBLE1BQUFBLFNBQVMsR0FBRyxDQUFDQSxTQUFiO0FBRUFDLE1BQUFBLElBQUksQ0FBQ0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7QUFFRCxXQUFPQyxJQUFQO0FBQ0QsR0FWTyxDQUFSO0FBWUEsU0FBT1gsS0FBUDtBQUNELENBaEJEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb3M7XG5cbmNvbnN0IGFkZFRvZG9Ub1RvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCB0b2dnbGVUb2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiJdfQ==