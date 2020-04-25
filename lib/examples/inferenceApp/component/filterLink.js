"use strict";

var _reaction = require("reaction");

var _necessary = require("necessary");

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var first = _necessary.arrayUtilities.first;

var FilterLink = function FilterLink(props) {
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

module.exports = FilterLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZpbHRlckxpbmsiLCJwcm9wcyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiZmlyc3RDaGlsZCIsInRleHQiLCJnZXRUZXh0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiYWN0aW9uIiwiZGlzcGF0Y2hlciIsImRpc3BhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7SUFFUUEsSyxHQUFVQyx5QixDQUFWRCxLOztBQUVSLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3BCQyxRQURvQixHQUNDRCxLQURELENBQ3BCQyxRQURvQjtBQUFBLE1BQ1ZDLE1BRFUsR0FDQ0YsS0FERCxDQUNWRSxNQURVO0FBQUEsTUFFdEJDLFNBRnNCLGFBRVBELE1BRk87QUFBQSxNQUd0QkUsVUFIc0IsR0FHVFAsS0FBSyxDQUFDSSxRQUFELENBSEk7QUFBQSxNQUl0QkksSUFKc0IsR0FJZkQsVUFBVSxDQUFDRSxPQUFYLEVBSmU7QUFNNUIsc0JBRUU7QUFBSyxJQUFBLFNBQVMsRUFBRUg7QUFBaEIsa0JBQ0U7QUFBRyxJQUFBLElBQUksRUFBQyxHQUFSO0FBQ0csSUFBQSxPQUFPLEVBQUUsaUJBQUNJLEtBQUQsRUFBVztBQUVWQSxNQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNQyxJQUFJLEdBQUdDLGdDQUFiO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUdULE1BRHpCO0FBQUEsVUFFTVUsTUFBTSxHQUFHO0FBQ1BILFFBQUFBLElBQUksRUFBSkEsSUFETztBQUVQRSxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRk8sT0FGZjs7QUFPQUUsNkJBQVdDLFFBQVgsQ0FBb0JGLE1BQXBCO0FBQ0Q7QUFiWixLQWVHUCxJQWZILENBREYsZUFrQkUsNENBQ0dBLElBREgsQ0FsQkYsQ0FGRjtBQXlCRCxDQS9CRDs7QUFpQ0FVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpCLFVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgRmlsdGVyTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBgJHtmaWx0ZXJ9IGZpbHRlcmAsXG4gICAgICAgIGZpcnN0Q2hpbGQgPSBmaXJzdChjaGlsZHJlbiksXG4gICAgICAgIHRleHQgPSBmaXJzdENoaWxkLmdldFRleHQoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTGluaztcbiJdfQ==