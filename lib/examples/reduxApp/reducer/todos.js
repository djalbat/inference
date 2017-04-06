'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3RvZG9zLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsInJlcXVpcmUiLCJBRERfVE9ETyIsIlRPR0dMRV9UT0RPIiwidG9kb3MiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhZGRUb2RvVG9Ub2RvcyIsInRvZ2dsZVRvZG9zIiwibW9kdWxlIiwiZXhwb3J0cyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZG8iLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVRQyxRLEdBQTBCRixTLENBQTFCRSxRO0lBQVVDLFcsR0FBZ0JILFMsQ0FBaEJHLFc7OztBQUVsQixJQUFNQyxRQUFRLGlCQUE2QjtBQUFBLE1BQTVCQyxLQUE0Qix1RUFBcEIsRUFBb0I7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLE1BQ2pDQyxJQURpQyxHQUN4QkQsTUFEd0IsQ0FDakNDLElBRGlDOzs7QUFHekMsTUFBSUgsUUFBUUMsS0FBWjs7QUFFQSxVQUFRRSxJQUFSO0FBQ0UsU0FBS0wsUUFBTDtBQUNFRSxjQUFRSSxlQUFlSixLQUFmLEVBQXNCRSxNQUF0QixDQUFSO0FBQ0E7O0FBRUYsU0FBS0gsV0FBTDtBQUNFQyxjQUFRSyxZQUFZTCxLQUFaLEVBQW1CRSxNQUFuQixDQUFSO0FBQ0E7QUFQSjs7QUFVQUQsVUFBUUQsS0FBUjs7QUFFQSxTQUFPQyxLQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBSyxPQUFPQyxPQUFQLEdBQWlCUCxLQUFqQjs7QUFFQSxJQUFNSSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNKLEtBQUQsRUFBUUUsTUFBUixFQUFtQjtBQUFBLE1BQ2hDTSxFQURnQyxHQUNuQk4sTUFEbUIsQ0FDaENNLEVBRGdDO0FBQUEsTUFDNUJDLElBRDRCLEdBQ25CUCxNQURtQixDQUM1Qk8sSUFENEI7QUFBQSxNQUVsQ0MsU0FGa0MsR0FFdEIsS0FGc0I7QUFBQSxNQUdsQ0MsSUFIa0MsR0FHM0I7QUFDTEgsUUFBSUEsRUFEQztBQUVMQyxVQUFNQSxJQUZEO0FBR0xDLGVBQVdBO0FBSE4sR0FIMkI7OztBQVN4Q1YsdUNBQ0tBLEtBREwsSUFFRVcsSUFGRjs7QUFLQSxTQUFPWCxLQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTUssY0FBYyxTQUFkQSxXQUFjLENBQUNMLEtBQUQsRUFBUUUsTUFBUixFQUFtQjtBQUFBLE1BQzdCTSxFQUQ2QixHQUN0Qk4sTUFEc0IsQ0FDN0JNLEVBRDZCOzs7QUFHckNSLFVBQVFBLE1BQU1ZLEdBQU4sQ0FBVSxVQUFDRCxJQUFELEVBQVU7QUFDMUIsUUFBSUEsS0FBS0gsRUFBTCxLQUFZQSxFQUFoQixFQUFvQjtBQUFBLFVBQ1pFLFNBRFksR0FDRUMsSUFERixDQUNaRCxTQURZOzs7QUFHbEJBLGtCQUFZLENBQUNBLFNBQWI7O0FBRUFDLFdBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQsV0FBT0MsSUFBUDtBQUNELEdBVk8sQ0FBUjs7QUFZQSxTQUFPWCxLQUFQO0FBQ0QsQ0FoQkQiLCJmaWxlIjoidG9kb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUgPSB0b2RvcztcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvZG9zO1xuXG5jb25zdCBhZGRUb2RvVG9Ub2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuY29uc3QgdG9nZ2xlVG9kb3MgPSAodG9kb3MsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG4iXX0=