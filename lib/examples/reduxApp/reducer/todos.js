"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var constants = require("../constants");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJBRERfVE9ETyIsIlRPR0dMRV9UT0RPIiwidG9kb3MiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhZGRUb2RvVG9Ub2RvcyIsInRvZ2dsZVRvZG9zIiwibW9kdWxlIiwiZXhwb3J0cyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZG8iLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0lBRVFDLFEsR0FBMEJGLFMsQ0FBMUJFLFE7SUFBVUMsVyxHQUFnQkgsUyxDQUFoQkcsVzs7QUFFbEIsSUFBTUMsS0FBSyxHQUFHLGlCQUE2QjtBQUFBLE1BQTVCQyxLQUE0Qix1RUFBcEIsRUFBb0I7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLE1BQ2pDQyxJQURpQyxHQUN4QkQsTUFEd0IsQ0FDakNDLElBRGlDO0FBR3pDLE1BQUlILEtBQUssR0FBR0MsS0FBWjs7QUFFQSxVQUFRRSxJQUFSO0FBQ0UsU0FBS0wsUUFBTDtBQUNFRSxNQUFBQSxLQUFLLEdBQUdJLGNBQWMsQ0FBQ0osS0FBRCxFQUFRRSxNQUFSLENBQXRCO0FBQ0E7O0FBRUYsU0FBS0gsV0FBTDtBQUNFQyxNQUFBQSxLQUFLLEdBQUdLLFdBQVcsQ0FBQ0wsS0FBRCxFQUFRRSxNQUFSLENBQW5CO0FBQ0E7QUFQSjs7QUFVQUQsRUFBQUEsS0FBSyxHQUFHRCxLQUFSO0FBRUEsU0FBT0MsS0FBUDtBQUNELENBbEJEOztBQW9CQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxLQUFqQjs7QUFFQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNKLEtBQUQsRUFBUUUsTUFBUixFQUFtQjtBQUFBLE1BQ2hDTSxFQURnQyxHQUNuQk4sTUFEbUIsQ0FDaENNLEVBRGdDO0FBQUEsTUFDNUJDLElBRDRCLEdBQ25CUCxNQURtQixDQUM1Qk8sSUFENEI7QUFBQSxNQUVsQ0MsU0FGa0MsR0FFdEIsS0FGc0I7QUFBQSxNQUdsQ0MsSUFIa0MsR0FHM0I7QUFDTEgsSUFBQUEsRUFBRSxFQUFGQSxFQURLO0FBRUxDLElBQUFBLElBQUksRUFBSkEsSUFGSztBQUdMQyxJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FIMkI7QUFTeENWLEVBQUFBLEtBQUssZ0NBQ0FBLEtBREEsSUFFSFcsSUFGRyxFQUFMO0FBS0EsU0FBT1gsS0FBUDtBQUNELENBZkQ7O0FBaUJBLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLEtBQUQsRUFBUUUsTUFBUixFQUFtQjtBQUFBLE1BQzdCTSxFQUQ2QixHQUN0Qk4sTUFEc0IsQ0FDN0JNLEVBRDZCO0FBR3JDUixFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNELElBQUQsRUFBVTtBQUMxQixRQUFJQSxJQUFJLENBQUNILEVBQUwsS0FBWUEsRUFBaEIsRUFBb0I7QUFBQSxVQUNaRSxTQURZLEdBQ0VDLElBREYsQ0FDWkQsU0FEWTtBQUdsQkEsTUFBQUEsU0FBUyxHQUFHLENBQUNBLFNBQWI7QUFFQUMsTUFBQUEsSUFBSSxDQUFDRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOztBQUVELFdBQU9DLElBQVA7QUFDRCxHQVZPLENBQVI7QUFZQSxTQUFPWCxLQUFQO0FBQ0QsQ0FoQkQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuY29uc3QgeyBBRERfVE9ETywgVE9HR0xFX1RPRE8gfSA9IGNvbnN0YW50cztcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0b2RvcztcblxuY29uc3QgYWRkVG9kb1RvVG9kb3MgPSAodG9kb3MsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmNvbnN0IHRvZ2dsZVRvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuXG4gIHRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICBsZXQgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgIHRvZG8uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0b2RvO1xuICB9KTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuIl19