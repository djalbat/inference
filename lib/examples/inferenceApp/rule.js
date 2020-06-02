"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

var _addTodo = _interopRequireDefault(require("./rule/addTodo"));

var _setVisibilityFilter = _interopRequireDefault(require("./rule/setVisibilityFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var rule = (0, _index.combineRules)({
  addTodo: _addTodo["default"],
  setVisibilityFilter: _setVisibilityFilter["default"]
});
var _default = rule;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsicnVsZSIsImFkZFRvZG8iLCJzZXRWaXNpYmlsaXR5RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7O0FBSDRDO0FBSzVDLElBQU1BLElBQUksR0FBRyx5QkFBYTtBQUN4QkMsRUFBQUEsT0FBTyxFQUFQQSxtQkFEd0I7QUFFeEJDLEVBQUFBLG1CQUFtQixFQUFuQkE7QUFGd0IsQ0FBYixDQUFiO2VBS2VGLEkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJ1bGVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9ydWxlL2FkZFRvZG9cIjtcbmltcG9ydCBzZXRWaXNpYmlsaXR5RmlsdGVyIGZyb20gXCIuL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlclwiO1xuXG5jb25zdCBydWxlID0gY29tYmluZVJ1bGVzKHtcbiAgYWRkVG9kbyxcbiAgc2V0VmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGU7XG4iXX0=