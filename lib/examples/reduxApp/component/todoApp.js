"use strict";

var _reaction = require("reaction");

var _footer = _interopRequireDefault(require("./footer"));

var _addTodo = _interopRequireDefault(require("./addTodo"));

var _todoList = _interopRequireDefault(require("./todoList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TodoApp = function TodoApp() {
  return /*#__PURE__*/_reaction.React.createElement("div", null, /*#__PURE__*/_reaction.React.createElement(_addTodo["default"], null), /*#__PURE__*/_reaction.React.createElement(_todoList["default"], null), /*#__PURE__*/_reaction.React.createElement(_footer["default"], null));
};

module.exports = TodoApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9BcHAuanMiXSwibmFtZXMiOlsiVG9kb0FwcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxzQkFFZCx3REFDRSw4QkFBQyxtQkFBRCxPQURGLGVBRUUsOEJBQUMsb0JBQUQsT0FGRixlQUdFLDhCQUFDLGtCQUFELE9BSEYsQ0FGYztBQUFBLENBQWhCOztBQVVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLE9BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgQWRkVG9kbyBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxuY29uc3QgVG9kb0FwcCA9ICgpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIl19