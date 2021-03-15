"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _constants = require("../constants");
function addTodo(param) {
    var action = param === void 0 ? {
    } : param;
    var type = action.type;
    var update;
    switch(type){
        case _constants.ADD_TODO:
            var text = action.text;
            update = {
                text: text
            };
            break;
    }
    return update;
}
exports.default = addTodo;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7SUFFQSxVQUFBO1NBRUEsT0FBQSxDQUFBLEtBQUE7UUFBQSxNQUFBLEdBQUEsS0FBQTtRQUFBLEtBQUE7UUFDQSxJQUFBLEdBQUEsTUFBQSxDQUFBLElBQUE7UUFFQSxNQUFBO1dBRUEsSUFBQTthQVBBLFVBQUE7Z0JBU0EsSUFBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBO0FBRUEsa0JBQUE7QUFDQSxvQkFBQSxFQUFBLElBQUE7Ozs7V0FLQSxNQUFBOztrQkFmQSxPQUFBIn0=