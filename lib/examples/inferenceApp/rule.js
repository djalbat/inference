"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

var _addTodo = _interopRequireDefault(require("./rule/addTodo"));

var _setVisibilityFilter = _interopRequireDefault(require("./rule/setVisibilityFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rule = (0, _index.combineRules)({
  addTodo: _addTodo["default"],
  setVisibilityFilter: _setVisibilityFilter["default"]
});
var _default = rule;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsicnVsZSIsImFkZFRvZG8iLCJzZXRWaXNpYmlsaXR5RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLHlCQUFhO0FBQ3hCQyxFQUFBQSxPQUFPLEVBQVBBLG1CQUR3QjtBQUV4QkMsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQUZ3QixDQUFiLENBQWI7ZUFLZUYsSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vcnVsZS9hZGRUb2RvXCI7XG5pbXBvcnQgc2V0VmlzaWJpbGl0eUZpbHRlciBmcm9tIFwiLi9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXJcIjtcblxuY29uc3QgcnVsZSA9IGNvbWJpbmVSdWxlcyh7XG4gIGFkZFRvZG8sXG4gIHNldFZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBydWxlO1xuIl19