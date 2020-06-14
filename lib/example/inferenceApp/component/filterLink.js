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
  return /*#__PURE__*/_reaction.React.createElement("div", {
    className: className
  }, /*#__PURE__*/_reaction.React.createElement("a", {
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
  }, text), /*#__PURE__*/_reaction.React.createElement("span", null, text));
};

var _default = FilterLink;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZpbHRlckxpbmsiLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsImZpbHRlciIsImNsYXNzTmFtZSIsImZpcnN0Q2hpbGQiLCJ0ZXh0IiwiZ2V0VGV4dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwidmlzaWJpbGl0eUZpbHRlciIsImFjdGlvbiIsImRpc3BhdGNoZXIiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztJQUVRQSxLLEdBQVVDLHlCLENBQVZELEs7O0FBRVIsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsTUFDN0JDLFFBRDZCLEdBQ1JGLEtBRFEsQ0FDN0JFLFFBRDZCO0FBQUEsTUFDbkJDLE1BRG1CLEdBQ1JILEtBRFEsQ0FDbkJHLE1BRG1CO0FBQUEsTUFFL0JDLFNBRitCLGFBRWhCRCxNQUZnQjtBQUFBLE1BRy9CRSxVQUgrQixHQUdsQlIsS0FBSyxDQUFDSyxRQUFELENBSGE7QUFBQSxNQUkvQkksSUFKK0IsR0FJeEJELFVBQVUsQ0FBQ0UsT0FBWCxFQUp3QjtBQU1yQyxzQkFFRTtBQUFLLElBQUEsU0FBUyxFQUFFSDtBQUFoQixrQkFDRTtBQUFHLElBQUEsSUFBSSxFQUFDLEdBQVI7QUFDRyxJQUFBLE9BQU8sRUFBRSxpQkFBQ0ksS0FBRCxFQUFXO0FBRWxCQSxNQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNQyxJQUFJLEdBQUdDLGdDQUFiO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdULE1BRHpCO0FBQUEsVUFFTVUsTUFBTSxHQUFHO0FBQ1BILFFBQUFBLElBQUksRUFBSkEsSUFETztBQUVQRSxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRk8sT0FGZjs7QUFPQUUsNkJBQVdDLFFBQVgsQ0FBb0JGLE1BQXBCO0FBRUQ7QUFkSixLQWdCR1AsSUFoQkgsQ0FERixlQW1CRSw0Q0FDR0EsSUFESCxDQW5CRixDQUZGO0FBMEJELENBaENEOztlQWtDZVAsVSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSBwcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gYCR7ZmlsdGVyfSBmaWx0ZXJgLFxuICAgICAgICBmaXJzdENoaWxkID0gZmlyc3QoY2hpbGRyZW4pLFxuICAgICAgICB0ZXh0ID0gZmlyc3RDaGlsZC5nZXRUZXh0KCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckxpbms7XG4iXX0=