"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addTodo;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiXSwibmFtZXMiOlsiQUREX1RPRE8iLCJhZGRUb2RvIiwiYWN0aW9uIiwidHlwZSIsInVwZGF0ZSIsInRleHQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7a0JBSVksT0FBTztBQUZOLEdBQWMsQ0FBZCxVQUFjO1NBRWYsT0FBTyxDQUFDLEtBQVcsRUFBRSxDQUFDO1FBQWQsTUFBTSxHQUFOLEtBQVcsY0FBRixDQUFDO0lBQUEsQ0FBQyxHQUFYLEtBQVc7SUFDekMsR0FBSyxDQUFHLElBQUksR0FBSyxNQUFNLENBQWYsSUFBSTtJQUVaLEdBQUcsQ0FBQyxNQUFNO0lBRVYsTUFBTSxDQUFFLElBQUk7UUFDVixJQUFJLENBUmlCLFVBQWM7WUFTakMsR0FBSyxDQUFHLElBQUksR0FBSyxNQUFNLENBQWYsSUFBSTtZQUVaLE1BQU0sR0FBRyxDQUFDO2dCQUNSLElBQUksRUFBSixJQUFJO1lBQ04sQ0FBQztZQUNELEtBQUs7O0lBR1QsTUFBTSxDQUFDLE1BQU07QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIl19