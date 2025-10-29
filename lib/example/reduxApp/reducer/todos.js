"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return todos;
    }
});
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function todos() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
    todos = _to_consumable_array(todos).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPRE8iLCJhZGRUb2RvVG9Ub2RvcyIsIlRPR0dMRV9UT0RPIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3lCQUZjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixTQUFTQTtRQUFNQyxRQUFBQSxpRUFBUSxFQUFFLEVBQUVDLFNBQUFBLGlFQUFTLENBQUM7SUFDbEQsSUFBTSxBQUFFQyxPQUFTRCxPQUFUQztJQUVSLElBQUlILFFBQVFDO0lBRVosT0FBUUU7UUFDTixLQUFLQyxtQkFBUTtZQUNYSixRQUFRSyxlQUFlTCxPQUFPRTtZQUM5QjtRQUVGLEtBQUtJLHNCQUFXO1lBQ2ROLFFBQVFPLFlBQVlQLE9BQU9FO1lBQzNCO0lBQ0o7SUFFQUQsUUFBUUQ7SUFFUixPQUFPQztBQUNUO0FBRUEsU0FBU0ksZUFBZUwsS0FBSyxFQUFFRSxNQUFNO0lBQ25DLElBQVFNLEtBQWFOLE9BQWJNLElBQUlDLE9BQVNQLE9BQVRPLE1BQ05DLFlBQVksT0FDWkMsT0FBTztRQUNMSCxJQUFBQTtRQUNBQyxNQUFBQTtRQUNBQyxXQUFBQTtJQUNGO0lBRU5WLFFBQVEsQUFDTixxQkFBR0EsY0FERztRQUVOVztLQUNEO0lBRUQsT0FBT1g7QUFDVDtBQUVBLFNBQVNPLFlBQVlQLEtBQUssRUFBRUUsTUFBTTtJQUNoQyxJQUFNLEFBQUVNLEtBQU9OLE9BQVBNO0lBRVJSLFFBQVFBLE1BQU1ZLEdBQUcsQ0FBQyxTQUFDRDtRQUNqQixJQUFJQSxLQUFLSCxFQUFFLEtBQUtBLElBQUk7WUFDbEIsSUFBSSxBQUFFRSxZQUFjQyxLQUFkRDtZQUVOQSxZQUFZLENBQUNBO1lBRWJDLEtBQUtELFNBQVMsR0FBR0E7UUFDbkI7UUFFQSxPQUFPQztJQUNUO0lBRUEsT0FBT1g7QUFDVCJ9