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
var _dispatcher = /*#__PURE__*/ _interopRequireDefault(require("../dispatcher"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gcHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2ZpbHRlcn0gZmlsdGVyYCxcbiAgICAgICAgZmlyc3RDaGlsZCA9IGZpcnN0KGNoaWxkcmVuKSxcbiAgICAgICAgdGV4dCA9IGZpcnN0Q2hpbGQuZ2V0VGV4dCgpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJMaW5rO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJGaWx0ZXJMaW5rIiwicHJvcHMiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJmaXJzdENoaWxkIiwidGV4dCIsImdldFRleHQiLCJkaXYiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsInZpc2liaWxpdHlGaWx0ZXIiLCJhY3Rpb24iLCJkaXNwYXRjaGVyIiwiZGlzcGF0Y2giLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBNkNiLFNBQTBCOzs7ZUFBMUIsUUFBMEI7Ozt3QkEzQ0osVUFBVTt5QkFDRCxXQUFXOytEQUVuQixlQUFlO3lCQUVBLGNBQWM7Ozs7OztBQUVwRCxJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFakMsSUFBTUUsVUFBVSxHQUFHLFNBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO0lBQ3JDLElBQVFDLFFBQVEsR0FBYUYsS0FBSyxDQUExQkUsUUFBUSxFQUFFQyxNQUFNLEdBQUtILEtBQUssQ0FBaEJHLE1BQU0sRUFDbEJDLFNBQVMsR0FBRyxBQUFDLEVBQUEsQ0FBUyxNQUFPLENBQWRELE1BQU0sRUFBQyxTQUFPLENBQUMsRUFDOUJFLFVBQVUsR0FBR1IsS0FBSyxDQUFDSyxRQUFRLENBQUMsRUFDNUJJLElBQUksR0FBR0QsVUFBVSxDQUFDRSxPQUFPLEVBQUUsQUFBQztJQUVsQyxxQkFFRSw4QkFBQ0MsS0FBRztRQUFDSixTQUFTLEVBQUVBLFNBQVM7cUJBQ3ZCLDhCQUFDSyxHQUFDO1FBQUNDLElBQUksRUFBQyxHQUFHO1FBQ1JDLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUs7WUFFbEJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7WUFFdkIsSUFBTUMsSUFBSSxHQUFHQyxVQUFxQixzQkFBQSxFQUM1QkMsZ0JBQWdCLEdBQUdiLE1BQU0sRUFDekJjLE1BQU0sR0FBRztnQkFDUEgsSUFBSSxFQUFKQSxJQUFJO2dCQUNKRSxnQkFBZ0IsRUFBaEJBLGdCQUFnQjthQUNqQixBQUFDO1lBRVJFLFdBQVUsUUFBQSxDQUFDQyxRQUFRLENBQUNGLE1BQU0sQ0FBQyxDQUFDO1NBRTdCO09BRURYLElBQUksQ0FDSCxnQkFDSiw4QkFBQ2MsTUFBSSxRQUNGZCxJQUFJLENBQ0EsQ0FDSCxDQUNOO0NBQ0gsQUFBQztJQUVGLFFBQTBCLEdBQVhQLFVBQVUifQ==