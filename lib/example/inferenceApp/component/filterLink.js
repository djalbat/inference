"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _necessary = require("necessary");

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var first = _necessary.arrayUtilities.first;

var FilterLink = function FilterLink(props, context) {
  var children = props.children,
      filter = props.filter,
      className = "".concat(filter, " filter"),
      firstChild = first(children),
      text = firstChild.getText();
  return _reaction.React.createElement("div", {
    className: className
  }, _reaction.React.createElement("a", {
    href: "#",
    onClick: function onClick(event) {
      event.preventDefault();
      var type = _constants.SET_VISIBILITY_FILTER,
          visibilityFilter = filter,
          action = {
        type: type,
        visibilityFilter: visibilityFilter
      };

      _dispatcher["default"].dispatch(action);
    }
  }, text), _reaction.React.createElement("span", null, text));
};

var _default = FilterLink;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZpbHRlckxpbmsiLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsImZpbHRlciIsImNsYXNzTmFtZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0IiwiZ2V0VGV4dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwidmlzaWJpbGl0eUZpbHRlciIsImFjdGlvbiIsImRpc3BhdGNoZXIiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsTUFDN0JDLFFBRDZCLEdBQ1JGLEtBRFEsQ0FDN0JFLFFBRDZCO0FBQUEsTUFDbkJDLE1BRG1CLEdBQ1JILEtBRFEsQ0FDbkJHLE1BRG1CO0FBQUEsTUFFL0JDLFNBRitCLGFBRWhCRCxNQUZnQjtBQUFBLE1BRy9CRSxVQUgrQixHQUdsQlIsS0FBSyxDQUFDSyxRQUFELENBSGE7QUFBQSxNQUkvQkksSUFKK0IsR0FJeEJELFVBQVUsQ0FBQ0UsT0FBWCxFQUp3QjtBQU1yQyxTQUVFO0FBQUssSUFBQSxTQUFTLEVBQUVIO0FBQWhCLEtBQ0U7QUFBRyxJQUFBLElBQUksRUFBQyxHQUFSO0FBQ0csSUFBQSxPQUFPLEVBQUUsaUJBQUNJLEtBQUQsRUFBVztBQUVsQkEsTUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUEsVUFBTUMsSUFBSSxHQUFHQyxnQ0FBYjtBQUFBLFVBQ01DLGdCQUFnQixHQUFHVCxNQUR6QjtBQUFBLFVBRU1VLE1BQU0sR0FBRztBQUNQSCxRQUFBQSxJQUFJLEVBQUpBLElBRE87QUFFUEUsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUZPLE9BRmY7O0FBT0FFLDZCQUFXQyxRQUFYLENBQW9CRixNQUFwQjtBQUVEO0FBZEosS0FnQkdQLElBaEJILENBREYsRUFtQkUsNENBQ0dBLElBREgsQ0FuQkYsQ0FGRjtBQTBCRCxDQWhDRDs7ZUFrQ2VQLFUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gcHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2ZpbHRlcn0gZmlsdGVyYCxcbiAgICAgICAgZmlyc3RDaGlsZCA9IGZpcnN0KGNoaWxkcmVuKSxcbiAgICAgICAgdGV4dCA9IGZpcnN0Q2hpbGQuZ2V0VGV4dCgpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJMaW5rO1xuIl19