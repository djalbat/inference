"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _reaction = require("reaction");
var _footer = /*#__PURE__*/ _interopRequireDefault(require("./footer"));
var _addTodo = /*#__PURE__*/ _interopRequireDefault(require("./addTodo"));
var _todoList = /*#__PURE__*/ _interopRequireDefault(require("./todoList"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TodoApp = function(props, context) {
    return /*#__PURE__*/ _reaction.React.createElement("div", null, /*#__PURE__*/ _reaction.React.createElement(_addTodo.default, null), /*#__PURE__*/ _reaction.React.createElement(_todoList.default, null), /*#__PURE__*/ _reaction.React.createElement(_footer.default, null));
};
var _default = TodoApp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiJdLCJuYW1lcyI6WyJUb2RvQXBwIiwicHJvcHMiLCJjb250ZXh0IiwiZGl2IiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7d0JBaEJzQjsyREFFSDs0REFDQzs2REFDQzs7Ozs7O0FBRXJCLElBQU1BLFVBQVUsU0FBQ0MsT0FBT0M7eUJBRXRCLDhCQUFDQywyQkFDQyw4QkFBQ0MsZ0JBQU8sdUJBQ1IsOEJBQUNDLGlCQUFRLHVCQUNULDhCQUFDQyxlQUFNOztJQUtYLFdBQWVOIn0=