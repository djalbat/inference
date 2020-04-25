"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPRE8iLCJhZGRUb2RvVG9Ub2RvcyIsIlRPR0dMRV9UT0RPIiwidG9nZ2xlVG9kb3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidG9kbyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLGlCQUE2QjtBQUFBLE1BQTVCQyxLQUE0Qix1RUFBcEIsRUFBb0I7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLE1BQ2pDQyxJQURpQyxHQUN4QkQsTUFEd0IsQ0FDakNDLElBRGlDO0FBR3pDLE1BQUlILEtBQUssR0FBR0MsS0FBWjs7QUFFQSxVQUFRRSxJQUFSO0FBQ0UsU0FBS0MsbUJBQUw7QUFDRUosTUFBQUEsS0FBSyxHQUFHSyxjQUFjLENBQUNMLEtBQUQsRUFBUUUsTUFBUixDQUF0QjtBQUNBOztBQUVGLFNBQUtJLHNCQUFMO0FBQ0VOLE1BQUFBLEtBQUssR0FBR08sV0FBVyxDQUFDUCxLQUFELEVBQVFFLE1BQVIsQ0FBbkI7QUFDQTtBQVBKOztBQVVBRCxFQUFBQSxLQUFLLEdBQUdELEtBQVI7QUFFQSxTQUFPQyxLQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJULEtBQWpCOztBQUVBLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0wsS0FBRCxFQUFRRSxNQUFSLEVBQW1CO0FBQUEsTUFDaENRLEVBRGdDLEdBQ25CUixNQURtQixDQUNoQ1EsRUFEZ0M7QUFBQSxNQUM1QkMsSUFENEIsR0FDbkJULE1BRG1CLENBQzVCUyxJQUQ0QjtBQUFBLE1BRWxDQyxTQUZrQyxHQUV0QixLQUZzQjtBQUFBLE1BR2xDQyxJQUhrQyxHQUczQjtBQUNMSCxJQUFBQSxFQUFFLEVBQUZBLEVBREs7QUFFTEMsSUFBQUEsSUFBSSxFQUFKQSxJQUZLO0FBR0xDLElBQUFBLFNBQVMsRUFBVEE7QUFISyxHQUgyQjtBQVN4Q1osRUFBQUEsS0FBSyxnQ0FDQUEsS0FEQSxJQUVIYSxJQUZHLEVBQUw7QUFLQSxTQUFPYixLQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1AsS0FBRCxFQUFRRSxNQUFSLEVBQW1CO0FBQUEsTUFDN0JRLEVBRDZCLEdBQ3RCUixNQURzQixDQUM3QlEsRUFENkI7QUFHckNWLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDYyxHQUFOLENBQVUsVUFBQ0QsSUFBRCxFQUFVO0FBQzFCLFFBQUlBLElBQUksQ0FBQ0gsRUFBTCxLQUFZQSxFQUFoQixFQUFvQjtBQUFBLFVBQ1pFLFNBRFksR0FDRUMsSUFERixDQUNaRCxTQURZO0FBR2xCQSxNQUFBQSxTQUFTLEdBQUcsQ0FBQ0EsU0FBYjtBQUVBQyxNQUFBQSxJQUFJLENBQUNELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQsV0FBT0MsSUFBUDtBQUNELEdBVk8sQ0FBUjtBQVlBLFNBQU9iLEtBQVA7QUFDRCxDQWhCRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETywgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB0b2RvcyA9IHN0YXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgdG9kb3MgPSBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdG9kb3M7XG5cbmNvbnN0IGFkZFRvZG9Ub1RvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCB0b2dnbGVUb2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiJdfQ==