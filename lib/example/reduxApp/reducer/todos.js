"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todos;
var _constants = require("../constants");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function todos(param, param1) {
    var state = param === void 0 ? [] : param, action = param1 === void 0 ? {
    } : param1;
    var type = action.type;
    var todos = state;
    switch(type){
        case _constants.ADD_TODO:
            todos = addTodoToTodos(todos, action);
            break;
        case _constants.TOGGLE_TODO:
            todos = toggleTodos(todos, action);
            break;
    }
    state = todos;
    return state;
}
function addTodoToTodos(todos, action) {
    var id = action.id, text = action.text, completed = false, todo = {
        id: id,
        text: text,
        completed: completed
    };
    todos = _toConsumableArray(todos).concat([
        todo
    ]);
    return todos;
}
function toggleTodos(todos, action) {
    var id = action.id;
    todos = todos.map(function(todo) {
        if (todo.id === id) {
            var completed = todo.completed;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwibmFtZXMiOlsiQUREX1RPRE8iLCJUT0dHTEVfVE9ETyIsInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWRkVG9kb1RvVG9kb3MiLCJ0b2dnbGVUb2RvcyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZG8iLCJtYXAiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBSVksS0FBSztBQUZTLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFNUIsS0FBSyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsQ0FBQztRQUExQixLQUFLLEdBQUwsS0FBVSxjQUFGLENBQUMsQ0FBQyxHQUFWLEtBQVUsRUFBRSxNQUFNLEdBQU4sTUFBVyxjQUFGLENBQUM7SUFBQSxDQUFDLEdBQVgsTUFBVztJQUNuRCxHQUFLLENBQUcsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJO0lBRVosR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLO0lBRWpCLE1BQU0sQ0FBRSxJQUFJO1FBQ1YsSUFBSSxDQVI4QixVQUFjO1lBUzlDLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU07WUFDcEMsS0FBSztRQUVQLElBQUksQ0FaOEIsVUFBYztZQWE5QyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNO1lBQ2pDLEtBQUs7O0lBR1QsS0FBSyxHQUFHLEtBQUs7SUFFYixNQUFNLENBQUMsS0FBSztBQUNkLENBQUM7U0FFUSxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ3RDLEdBQUssQ0FBRyxFQUFFLEdBQVcsTUFBTSxDQUFuQixFQUFFLEVBQUUsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJLEVBQ1YsU0FBUyxHQUFHLEtBQUssRUFDakIsSUFBSSxHQUFHLENBQUM7UUFDTixFQUFFLEVBQUYsRUFBRTtRQUNGLElBQUksRUFBSixJQUFJO1FBQ0osU0FBUyxFQUFULFNBQVM7SUFDWCxDQUFDO0lBRVAsS0FBSyxzQkFDQSxLQUFLLFNBREYsQ0FBQztRQUVQLElBQUk7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO1NBRVEsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuQyxHQUFLLENBQUcsRUFBRSxHQUFLLE1BQU0sQ0FBYixFQUFFO0lBRVYsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO1FBQzNCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ25CLEdBQUcsQ0FBRyxTQUFTLEdBQUssSUFBSSxDQUFsQixTQUFTO1lBRWYsU0FBUyxJQUFJLFNBQVM7WUFFdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUgPSB0b2RvcztcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuXG4gIHRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICBsZXQgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgIHRvZG8uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0b2RvO1xuICB9KTtcblxuICByZXR1cm4gdG9kb3M7XG59XG4iXX0=