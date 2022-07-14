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
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPRE8iLCJhZGRUb2RvVG9Ub2RvcyIsIlRPR0dMRV9UT0RPIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBSWIsU0FrQkM7OztlQWxCdUJBLEtBQUs7Ozt5QkFGUyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxTQUFTQSxLQUFLLEdBQTBCO1FBQXpCQyxLQUFLLEdBQUxBLCtDQUFVLGtCQUFGLEVBQUUsRUFBRUMsTUFBTSxHQUFOQSwrQ0FBVyxrQkFBRixFQUFFO0lBQ25ELElBQU0sQUFBRUMsSUFBSSxHQUFLRCxNQUFNLENBQWZDLElBQUksQUFBVyxBQUFDO0lBRXhCLElBQUlILEtBQUssR0FBR0MsS0FBSyxBQUFDO0lBRWxCLE9BQVFFLElBQUk7UUFDVixLQUFLQyxVQUFRLFNBQUE7WUFDWEosS0FBSyxHQUFHSyxjQUFjLENBQUNMLEtBQUssRUFBRUUsTUFBTSxDQUFDLENBQUM7WUFDdEMsTUFBTTtRQUVSLEtBQUtJLFVBQVcsWUFBQTtZQUNkTixLQUFLLEdBQUdPLFdBQVcsQ0FBQ1AsS0FBSyxFQUFFRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxNQUFNO0tBQ1Q7SUFFREQsS0FBSyxHQUFHRCxLQUFLLENBQUM7SUFFZCxPQUFPQyxLQUFLLENBQUM7Q0FDZDtBQUVELFNBQVNJLGNBQWMsQ0FBQ0wsS0FBSyxFQUFFRSxNQUFNLEVBQUU7SUFDckMsSUFBUU0sRUFBRSxHQUFXTixNQUFNLENBQW5CTSxFQUFFLEVBQUVDLElBQUksR0FBS1AsTUFBTSxDQUFmTyxJQUFJLEVBQ1ZDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxJQUFJLEdBQUc7UUFDTEgsRUFBRSxFQUFGQSxFQUFFO1FBQ0ZDLElBQUksRUFBSkEsSUFBSTtRQUNKQyxTQUFTLEVBQVRBLFNBQVM7S0FDVixBQUFDO0lBRVJWLEtBQUssR0FBRyxBQUNOLG1CQUFHQSxLQUFLLENBQUxBLFFBREc7UUFFTlcsSUFBSTtLQUNMLENBQUEsQ0FBQztJQUVGLE9BQU9YLEtBQUssQ0FBQztDQUNkO0FBRUQsU0FBU08sV0FBVyxDQUFDUCxLQUFLLEVBQUVFLE1BQU0sRUFBRTtJQUNsQyxJQUFNLEFBQUVNLEVBQUUsR0FBS04sTUFBTSxDQUFiTSxFQUFFLEFBQVcsQUFBQztJQUV0QlIsS0FBSyxHQUFHQSxLQUFLLENBQUNZLEdBQUcsQ0FBQyxTQUFDRCxJQUFJLEVBQUs7UUFDMUIsSUFBSUEsSUFBSSxDQUFDSCxFQUFFLEtBQUtBLEVBQUUsRUFBRTtZQUNsQixJQUFJLEFBQUVFLFNBQVMsR0FBS0MsSUFBSSxDQUFsQkQsU0FBUyxBQUFTLEFBQUM7WUFFekJBLFNBQVMsR0FBRyxDQUFDQSxTQUFTLENBQUM7WUFFdkJDLElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTLENBQUM7U0FDNUI7UUFFRCxPQUFPQyxJQUFJLENBQUM7S0FDYixDQUFDLENBQUM7SUFFSCxPQUFPWCxLQUFLLENBQUM7Q0FDZCJ9