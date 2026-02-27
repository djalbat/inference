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
const _index = require("../../index");
const _addTodo = /*#__PURE__*/ _interop_require_default(require("./rule/addTodo"));
const _setVisibilityFilter = /*#__PURE__*/ _interop_require_default(require("./rule/setVisibilityFilter"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const rule = (0, _index.combineRules)({
    addTodo: _addTodo.default,
    setVisibilityFilter: _setVisibilityFilter.default
});
const _default = rule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBhZGRUb2RvIGZyb20gXCIuL3J1bGUvYWRkVG9kb1wiO1xuaW1wb3J0IHNldFZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcnVsZTtcbiJdLCJuYW1lcyI6WyJydWxlIiwiY29tYmluZVJ1bGVzIiwiYWRkVG9kbyIsInNldFZpc2liaWxpdHlGaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3VCQVY2QjtnRUFFVDs0RUFDWTs7Ozs7O0FBRWhDLE1BQU1BLE9BQU9DLElBQUFBLG1CQUFZLEVBQUM7SUFDeEJDLFNBQUFBLGdCQUFPO0lBQ1BDLHFCQUFBQSw0QkFBbUI7QUFDckI7TUFFQSxXQUFlSCJ9