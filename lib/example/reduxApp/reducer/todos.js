"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = todos1;
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
function todos1(param, param1) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWRkVG9kb1RvVG9kb3MiLCJ0b2dnbGVUb2RvcyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInRvZG8iLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7a0JBSVlBLE1BQUs7QUFGUyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVCQSxNQUFLLENBQUNDLEtBQVUsRUFBRUMsTUFBVyxFQUFFLENBQUM7UUFBMUJELEtBQUssR0FBTEEsS0FBVSxjQUFGLENBQUMsQ0FBQyxHQUFWQSxLQUFVLEVBQUVDLE1BQU0sR0FBTkEsTUFBVyxjQUFGLENBQUM7SUFBQSxDQUFDLEdBQVhBLE1BQVc7SUFDbkQsR0FBSyxDQUFHQyxJQUFJLEdBQUtELE1BQU0sQ0FBZkMsSUFBSTtJQUVaLEdBQUcsQ0FBQ0gsS0FBSyxHQUFHQyxLQUFLO0lBRWpCLE1BQU0sQ0FBRUUsSUFBSTtRQUNWLElBQUksQ0FSOEIsVUFBYztZQVM5Q0gsS0FBSyxHQUFHSSxjQUFjLENBQUNKLEtBQUssRUFBRUUsTUFBTTtZQUNwQyxLQUFLO1FBRVAsSUFBSSxDQVo4QixVQUFjO1lBYTlDRixLQUFLLEdBQUdLLFdBQVcsQ0FBQ0wsS0FBSyxFQUFFRSxNQUFNO1lBQ2pDLEtBQUs7O0lBR1RELEtBQUssR0FBR0QsS0FBSztJQUViLE1BQU0sQ0FBQ0MsS0FBSztBQUNkLENBQUM7U0FFUUcsY0FBYyxDQUFDSixLQUFLLEVBQUVFLE1BQU0sRUFBRSxDQUFDO0lBQ3RDLEdBQUssQ0FBR0ksRUFBRSxHQUFXSixNQUFNLENBQW5CSSxFQUFFLEVBQUVDLElBQUksR0FBS0wsTUFBTSxDQUFmSyxJQUFJLEVBQ1ZDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxJQUFJLEdBQUcsQ0FBQztRQUNOSCxFQUFFLEVBQUZBLEVBQUU7UUFDRkMsSUFBSSxFQUFKQSxJQUFJO1FBQ0pDLFNBQVMsRUFBVEEsU0FBUztJQUNYLENBQUM7SUFFUFIsS0FBSyxzQkFDQUEsS0FBSyxTQURGLENBQUM7UUFFUFMsSUFBSTtJQUNOLENBQUM7SUFFRCxNQUFNLENBQUNULEtBQUs7QUFDZCxDQUFDO1NBRVFLLFdBQVcsQ0FBQ0wsS0FBSyxFQUFFRSxNQUFNLEVBQUUsQ0FBQztJQUNuQyxHQUFLLENBQUdJLEVBQUUsR0FBS0osTUFBTSxDQUFiSSxFQUFFO0lBRVZOLEtBQUssR0FBR0EsS0FBSyxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQRCxJQUFJLEVBQUssQ0FBQztRQUMzQixFQUFFLEVBQUVBLElBQUksQ0FBQ0gsRUFBRSxLQUFLQSxFQUFFLEVBQUUsQ0FBQztZQUNuQixHQUFHLENBQUdFLFNBQVMsR0FBS0MsSUFBSSxDQUFsQkQsU0FBUztZQUVmQSxTQUFTLElBQUlBLFNBQVM7WUFFdEJDLElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUNDLElBQUk7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFDVCxLQUFLO0FBQ2QsQ0FBQyJ9