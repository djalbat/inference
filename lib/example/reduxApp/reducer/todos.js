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
    var todos1 = state;
    switch(type){
        case _constants.ADD_TODO:
            todos1 = addTodoToTodos(todos1, action);
            break;
        case _constants.TOGGLE_TODO:
            todos1 = toggleTodos(todos1, action);
            break;
    }
    state = todos1;
    return state;
}
function addTodoToTodos(todos1, action) {
    var id = action.id, text = action.text, completed = false, todo = {
        id: id,
        text: text,
        completed: completed
    };
    todos1 = _toConsumableArray(todos1).concat([
        todo
    ]);
    return todos1;
}
function toggleTodos(todos1, action) {
    var id = action.id;
    todos1 = todos1.map(function(todo) {
        if (todo.id === id) {
            var completed = todo.completed;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBSVksS0FBSztBQUZTLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFNUIsS0FBSyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsQ0FBQztRQUExQixLQUFLLEdBQUwsS0FBVSxtQkFBVixLQUFVLEVBQUUsTUFBTSxHQUFOLE1BQVc7UUFBWCxNQUFXO0lBQ25ELEdBQUssQ0FBRyxJQUFJLEdBQUssTUFBTSxDQUFmLElBQUk7SUFFWixHQUFHLENBQUMsTUFBSyxHQUFHLEtBQUs7V0FFVCxJQUFJO2FBUHdCLFVBQWM7WUFTOUMsTUFBSyxHQUFHLGNBQWMsQ0FBQyxNQUFLLEVBQUUsTUFBTTs7YUFUSixVQUFjO1lBYTlDLE1BQUssR0FBRyxXQUFXLENBQUMsTUFBSyxFQUFFLE1BQU07OztJQUlyQyxLQUFLLEdBQUcsTUFBSztXQUVOLEtBQUs7QUFDZCxDQUFDO1NBRVEsY0FBYyxDQUFDLE1BQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUcsRUFBRSxHQUFXLE1BQU0sQ0FBbkIsRUFBRSxFQUFFLElBQUksR0FBSyxNQUFNLENBQWYsSUFBSSxFQUNWLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLElBQUk7UUFDRixFQUFFLEVBQUYsRUFBRTtRQUNGLElBQUksRUFBSixJQUFJO1FBQ0osU0FBUyxFQUFULFNBQVM7O0lBR2pCLE1BQUssc0JBQ0EsTUFBSztRQUNSLElBQUk7O1dBR0MsTUFBSztBQUNkLENBQUM7U0FFUSxXQUFXLENBQUMsTUFBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ25DLEdBQUssQ0FBRyxFQUFFLEdBQUssTUFBTSxDQUFiLEVBQUU7SUFFVixNQUFLLEdBQUcsTUFBSyxDQUFDLEdBQUcsVUFBRSxJQUFJLEVBQUssQ0FBQztRQUMzQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNuQixHQUFHLENBQUcsU0FBUyxHQUFLLElBQUksQ0FBbEIsU0FBUztZQUVmLFNBQVMsSUFBSSxTQUFTO1lBRXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUM1QixDQUFDO2VBRU0sSUFBSTtJQUNiLENBQUM7V0FFTSxNQUFLO0FBQ2QsQ0FBQyJ9