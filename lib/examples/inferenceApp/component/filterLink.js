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

var _default = FilterLink;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZpbHRlckxpbmsiLCJwcm9wcyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiZmlyc3RDaGlsZCIsInRleHQiLCJnZXRUZXh0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiYWN0aW9uIiwiZGlzcGF0Y2hlciIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUVBOzs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7QUFFUixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNwQkMsUUFEb0IsR0FDQ0QsS0FERCxDQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxNQURVLEdBQ0NGLEtBREQsQ0FDVkUsTUFEVTtBQUFBLE1BRXRCQyxTQUZzQixhQUVQRCxNQUZPO0FBQUEsTUFHdEJFLFVBSHNCLEdBR1RQLEtBQUssQ0FBQ0ksUUFBRCxDQUhJO0FBQUEsTUFJdEJJLElBSnNCLEdBSWZELFVBQVUsQ0FBQ0UsT0FBWCxFQUplO0FBTTVCLHNCQUVFO0FBQUssSUFBQSxTQUFTLEVBQUVIO0FBQWhCLGtCQUNFO0FBQUcsSUFBQSxJQUFJLEVBQUMsR0FBUjtBQUNHLElBQUEsT0FBTyxFQUFFLGlCQUFDSSxLQUFELEVBQVc7QUFFVkEsTUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUEsVUFBTUMsSUFBSSxHQUFHQyxnQ0FBYjtBQUFBLFVBQ01DLGdCQUFnQixHQUFHVCxNQUR6QjtBQUFBLFVBRU1VLE1BQU0sR0FBRztBQUNQSCxRQUFBQSxJQUFJLEVBQUpBLElBRE87QUFFUEUsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUZPLE9BRmY7O0FBT0FFLDZCQUFXQyxRQUFYLENBQW9CRixNQUFwQjtBQUNEO0FBYlosS0FlR1AsSUFmSCxDQURGLGVBa0JFLDRDQUNHQSxJQURILENBbEJGLENBRkY7QUF5QkQsQ0EvQkQ7O2VBaUNlTixVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgRmlsdGVyTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBgJHtmaWx0ZXJ9IGZpbHRlcmAsXG4gICAgICAgIGZpcnN0Q2hpbGQgPSBmaXJzdChjaGlsZHJlbiksXG4gICAgICAgIHRleHQgPSBmaXJzdENoaWxkLmdldFRleHQoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckxpbms7XG4iXX0=