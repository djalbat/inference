'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var constants = require('../constants');

var ADD_TODO = constants.ADD_TODO,
    TOGGLE_TODO = constants.TOGGLE_TODO;

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;
  var todos = state;

  switch (type) {
    case ADD_TODO:
      todos = addTodoToTodos(todos, action);
      break;

    case TOGGLE_TODO:
      todos = toggleTodos(todos, action);
      break;
  }

  state = todos;
  return state;
};

module.exports = todos;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJBRERfVE9ETyIsIlRPR0dMRV9UT0RPIiwidG9kb3MiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhZGRUb2RvVG9Ub2RvcyIsInRvZ2dsZVRvZG9zIiwibW9kdWxlIiwiZXhwb3J0cyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZG8iLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7SUFFUUMsUSxHQUEwQkYsUyxDQUExQkUsUTtJQUFVQyxXLEdBQWdCSCxTLENBQWhCRyxXOztBQUVsQixJQUFNQyxLQUFLLEdBQUcsaUJBQTZCO0FBQUEsTUFBNUJDLEtBQTRCLHVFQUFwQixFQUFvQjtBQUFBLE1BQWhCQyxNQUFnQix1RUFBUCxFQUFPO0FBQUEsTUFDakNDLElBRGlDLEdBQ3hCRCxNQUR3QixDQUNqQ0MsSUFEaUM7QUFHekMsTUFBSUgsS0FBSyxHQUFHQyxLQUFaOztBQUVBLFVBQVFFLElBQVI7QUFDRSxTQUFLTCxRQUFMO0FBQ0VFLE1BQUFBLEtBQUssR0FBR0ksY0FBYyxDQUFDSixLQUFELEVBQVFFLE1BQVIsQ0FBdEI7QUFDQTs7QUFFRixTQUFLSCxXQUFMO0FBQ0VDLE1BQUFBLEtBQUssR0FBR0ssV0FBVyxDQUFDTCxLQUFELEVBQVFFLE1BQVIsQ0FBbkI7QUFDQTtBQVBKOztBQVVBRCxFQUFBQSxLQUFLLEdBQUdELEtBQVI7QUFFQSxTQUFPQyxLQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBSyxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLEtBQWpCOztBQUVBLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osS0FBRCxFQUFRRSxNQUFSLEVBQW1CO0FBQUEsTUFDaENNLEVBRGdDLEdBQ25CTixNQURtQixDQUNoQ00sRUFEZ0M7QUFBQSxNQUM1QkMsSUFENEIsR0FDbkJQLE1BRG1CLENBQzVCTyxJQUQ0QjtBQUFBLE1BRWxDQyxTQUZrQyxHQUV0QixLQUZzQjtBQUFBLE1BR2xDQyxJQUhrQyxHQUczQjtBQUNMSCxJQUFBQSxFQUFFLEVBQUZBLEVBREs7QUFFTEMsSUFBQUEsSUFBSSxFQUFKQSxJQUZLO0FBR0xDLElBQUFBLFNBQVMsRUFBVEE7QUFISyxHQUgyQjtBQVN4Q1YsRUFBQUEsS0FBSyxnQ0FDQUEsS0FEQSxJQUVIVyxJQUZHLEVBQUw7QUFLQSxTQUFPWCxLQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsS0FBRCxFQUFRRSxNQUFSLEVBQW1CO0FBQUEsTUFDN0JNLEVBRDZCLEdBQ3RCTixNQURzQixDQUM3Qk0sRUFENkI7QUFHckNSLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDWSxHQUFOLENBQVUsVUFBQ0QsSUFBRCxFQUFVO0FBQzFCLFFBQUlBLElBQUksQ0FBQ0gsRUFBTCxLQUFZQSxFQUFoQixFQUFvQjtBQUFBLFVBQ1pFLFNBRFksR0FDRUMsSUFERixDQUNaRCxTQURZO0FBR2xCQSxNQUFBQSxTQUFTLEdBQUcsQ0FBQ0EsU0FBYjtBQUVBQyxNQUFBQSxJQUFJLENBQUNELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQsV0FBT0MsSUFBUDtBQUNELEdBVk8sQ0FBUjtBQVlBLFNBQU9YLEtBQVA7QUFDRCxDQWhCRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB0b2RvcyA9IHN0YXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgdG9kb3MgPSBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdG9kb3M7XG5cbmNvbnN0IGFkZFRvZG9Ub1RvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCB0b2dnbGVUb2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiJdfQ==