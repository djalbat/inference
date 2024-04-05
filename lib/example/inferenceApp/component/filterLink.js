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
var _necessary = require("necessary");
var _dispatcher = /*#__PURE__*/ _interop_require_default(require("../dispatcher"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first;
var FilterLink = function(props, context) {
    var children = props.children, filter = props.filter, className = "".concat(filter, " filter"), firstChild = first(children), text = firstChild.getText();
    return /*#__PURE__*/ _reaction.React.createElement("div", {
        className: className
    }, /*#__PURE__*/ _reaction.React.createElement("a", {
        href: "#",
        onClick: function(event) {
            event.preventDefault();
            var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                type: type,
                visibilityFilter: visibilityFilter
            };
            _dispatcher.default.dispatch(action);
        }
    }, text), /*#__PURE__*/ _reaction.React.createElement("span", null, text));
};
var _default = FilterLink;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gcHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2ZpbHRlcn0gZmlsdGVyYCxcbiAgICAgICAgZmlyc3RDaGlsZCA9IGZpcnN0KGNoaWxkcmVuKSxcbiAgICAgICAgdGV4dCA9IGZpcnN0Q2hpbGQuZ2V0VGV4dCgpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJMaW5rO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJGaWx0ZXJMaW5rIiwicHJvcHMiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJmaXJzdENoaWxkIiwidGV4dCIsImdldFRleHQiLCJkaXYiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsInZpc2liaWxpdHlGaWx0ZXIiLCJhY3Rpb24iLCJkaXNwYXRjaGVyIiwiZGlzcGF0Y2giLCJzcGFuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkNBOzs7ZUFBQTs7O3dCQTNDc0I7eUJBQ1M7aUVBRVI7eUJBRWU7Ozs7OztBQUV0QyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLGFBQWEsU0FBQ0MsT0FBT0M7SUFDekIsSUFBUUMsV0FBcUJGLE1BQXJCRSxVQUFVQyxTQUFXSCxNQUFYRyxRQUNaQyxZQUFZLEFBQUMsR0FBUyxPQUFQRCxRQUFPLFlBQ3RCRSxhQUFhUixNQUFNSyxXQUNuQkksT0FBT0QsV0FBV0UsT0FBTztJQUUvQixxQkFFRSw4QkFBQ0M7UUFBSUosV0FBV0E7cUJBQ2QsOEJBQUNLO1FBQUVDLE1BQUs7UUFDTEMsU0FBUyxTQUFDQztZQUVSQSxNQUFNQyxjQUFjO1lBRXBCLElBQU1DLE9BQU9DLGdDQUFxQixFQUM1QkMsbUJBQW1CYixRQUNuQmMsU0FBUztnQkFDUEgsTUFBQUE7Z0JBQ0FFLGtCQUFBQTtZQUNGO1lBRU5FLG1CQUFVLENBQUNDLFFBQVEsQ0FBQ0Y7UUFFdEI7T0FFQVgscUJBRUgsOEJBQUNjLGNBQ0VkO0FBSVQ7SUFFQSxXQUFlUCJ9