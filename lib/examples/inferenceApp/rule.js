"use strict";

var _index = require("../../index");

var _addTodo = _interopRequireDefault(require("./rule/addTodo"));

var _setVisibilityFilter = _interopRequireDefault(require("./rule/setVisibilityFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rule = (0, _index.combineRules)({
  addTodo: _addTodo["default"],
  setVisibilityFilter: _setVisibilityFilter["default"]
});
module.exports = rule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsicnVsZSIsImFkZFRvZG8iLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcseUJBQWE7QUFDeEJDLEVBQUFBLE9BQU8sRUFBUEEsbUJBRHdCO0FBRXhCQyxFQUFBQSxtQkFBbUIsRUFBbkJBO0FBRndCLENBQWIsQ0FBYjtBQUtBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmVSdWxlcyB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuXG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9ydWxlL2FkZFRvZG9cIjtcbmltcG9ydCBzZXRWaXNpYmlsaXR5RmlsdGVyIGZyb20gXCIuL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlclwiO1xuXG5jb25zdCBydWxlID0gY29tYmluZVJ1bGVzKHtcbiAgYWRkVG9kbyxcbiAgc2V0VmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcnVsZTtcbiJdfQ==