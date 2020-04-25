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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkZpbHRlckxpbmsiLCJwcm9wcyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiZmlyc3RDaGlsZCIsInRleHQiLCJnZXRUZXh0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiYWN0aW9uIiwiZGlzcGF0Y2hlciIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUVBOzs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7QUFFUixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNwQkMsUUFEb0IsR0FDQ0QsS0FERCxDQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxNQURVLEdBQ0NGLEtBREQsQ0FDVkUsTUFEVTtBQUFBLE1BRXRCQyxTQUZzQixhQUVQRCxNQUZPO0FBQUEsTUFHdEJFLFVBSHNCLEdBR1RQLEtBQUssQ0FBQ0ksUUFBRCxDQUhJO0FBQUEsTUFJdEJJLElBSnNCLEdBSWZELFVBQVUsQ0FBQ0UsT0FBWCxFQUplO0FBTTVCLHNCQUVFO0FBQUssSUFBQSxTQUFTLEVBQUVIO0FBQWhCLGtCQUNFO0FBQUcsSUFBQSxJQUFJLEVBQUMsR0FBUjtBQUNHLElBQUEsT0FBTyxFQUFFLGlCQUFDSSxLQUFELEVBQVc7QUFFbEJBLE1BQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLFVBQU1DLElBQUksR0FBR0MsZ0NBQWI7QUFBQSxVQUNNQyxnQkFBZ0IsR0FBR1QsTUFEekI7QUFBQSxVQUVNVSxNQUFNLEdBQUc7QUFDUEgsUUFBQUEsSUFBSSxFQUFKQSxJQURPO0FBRVBFLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFGTyxPQUZmOztBQU9BRSw2QkFBV0MsUUFBWCxDQUFvQkYsTUFBcEI7QUFFRDtBQWRKLEtBZ0JHUCxJQWhCSCxDQURGLGVBbUJFLDRDQUNHQSxJQURILENBbkJGLENBRkY7QUEwQkQsQ0FoQ0Q7O2VBa0NlTixVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgRmlsdGVyTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBgJHtmaWx0ZXJ9IGZpbHRlcmAsXG4gICAgICAgIGZpcnN0Q2hpbGQgPSBmaXJzdChjaGlsZHJlbiksXG4gICAgICAgIHRleHQgPSBmaXJzdENoaWxkLmdldFRleHQoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9hPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyTGluaztcbiJdfQ==