"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
var _addTodo = _interopRequireDefault(require("./rule/addTodo"));
var _setVisibilityFilter = _interopRequireDefault(require("./rule/setVisibilityFilter"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rule = (0, _index).combineRules({
    addTodo: _addTodo.default,
    setVisibilityFilter: _setVisibilityFilter.default
});
var _default = rule;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSdWxlcyIsImFkZFRvZG8iLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwicnVsZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFaUIsR0FBYSxDQUFiLE1BQWE7QUFFdEIsR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDSixHQUE0QixDQUE1QixvQkFBNEI7Ozs7OztBQUU1RCxHQUFLLENBQUMsSUFBSSxPQUxtQixNQUFhLGVBS2hCLENBQUM7SUFDekIsT0FBTyxFQUpXLFFBQWdCO0lBS2xDLG1CQUFtQixFQUpXLG9CQUE0QjtBQUs1RCxDQUFDO2VBRWMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBhZGRUb2RvIGZyb20gXCIuL3J1bGUvYWRkVG9kb1wiO1xuaW1wb3J0IHNldFZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcnVsZTtcbiJdfQ==