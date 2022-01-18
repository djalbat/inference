"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addTodo;
var _constants = require("../constants");
function addTodo() {
    var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIl0sIm5hbWVzIjpbImFkZFRvZG8iLCJhY3Rpb24iLCJ0eXBlIiwidXBkYXRlIiwidGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztrQkFJWUEsT0FBTztBQUZOLEdBQWMsQ0FBZCxVQUFjO1NBRWZBLE9BQU8sR0FBYyxDQUFDO1FBQWRDLE1BQU0sb0VBQUcsQ0FBQyxDQUFDO0lBQ3pDLEdBQUssQ0FBR0MsSUFBSSxHQUFLRCxNQUFNLENBQWZDLElBQUk7SUFFWixHQUFHLENBQUNDLE1BQU07SUFFVixNQUFNLENBQUVELElBQUk7UUFDVixJQUFJLENBUmlCLFVBQWM7WUFTakMsR0FBSyxDQUFHRSxJQUFJLEdBQUtILE1BQU0sQ0FBZkcsSUFBSTtZQUVaRCxNQUFNLEdBQUcsQ0FBQztnQkFDUkMsSUFBSSxFQUFKQSxJQUFJO1lBQ04sQ0FBQztZQUNELEtBQUs7O0lBR1QsTUFBTSxDQUFDRCxNQUFNO0FBQ2YsQ0FBQyJ9