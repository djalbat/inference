"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _footer = _interopRequireDefault(require("./footer"));
var _addTodo = _interopRequireDefault(require("./addTodo"));
var _todoList = _interopRequireDefault(require("./todoList"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TodoApp = function(props, context) {
    /*#__PURE__*/ return _reaction.React.createElement("div", null, /*#__PURE__*/ _reaction.React.createElement(_addTodo.default, null), /*#__PURE__*/ _reaction.React.createElement(_todoList.default, null), /*#__PURE__*/ _reaction.React.createElement(_footer.default, null));
};
var _default = TodoApp;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9vdGVyIiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiVG9kb0FwcCIsInByb3BzIiwiY29udGV4dCIsImRpdiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFVLENBQVYsU0FBVTtBQUViLEdBQVUsQ0FBVixPQUFVO0FBQ1QsR0FBVyxDQUFYLFFBQVc7QUFDVixHQUFZLENBQVosU0FBWTs7Ozs7O0FBRWpDLEdBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPO2tCQUU3QixNQUNGLENBVHNCLFNBQVUsc0JBUTdCLEdBQUcsdUJBUmdCLFNBQVUscUJBR1osUUFBVywrQkFIVCxTQUFVLHFCQUlYLFNBQVksK0JBSlgsU0FBVSxxQkFFYixPQUFVOztlQWNkLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5jb25zdCBUb2RvQXBwID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxkaXY+XG4gICAgPEFkZFRvZG8gLz5cbiAgICA8VG9kb0xpc3QgLz5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9BcHA7XG4iXX0=