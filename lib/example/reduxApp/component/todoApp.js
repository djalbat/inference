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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRWIsR0FBVSxDQUFWLE9BQVU7QUFDVCxHQUFXLENBQVgsUUFBVztBQUNWLEdBQVksQ0FBWixTQUFZOzs7Ozs7QUFFakMsR0FBSyxDQUFDLE9BQU8sWUFBSSxLQUFLLEVBQUUsT0FBTzt5QkFOVCxTQUFVLHNCQVE3QixHQUFHLHVCQVJnQixTQUFVLHFCQUdaLFFBQVcsK0JBSFQsU0FBVSxxQkFJWCxTQUFZLCtCQUpYLFNBQVUscUJBRWIsT0FBVTs7ZUFjZCxPQUFPIn0=