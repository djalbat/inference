"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var TodoListItem = function TodoListItem(props) {
  var clickHandler = props.clickHandler,
      completed = props.completed,
      text = props.text,
      textDecoration = completed ? "line-through" : "none",
      style = {
    textDecoration: textDecoration
  };
  return /*#__PURE__*/_reaction.React.createElement("li", {
    style: style,
    onClick: clickHandler
  }, text);
};

var _default = TodoListItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW0iLCJwcm9wcyIsImNsaWNrSGFuZGxlciIsImNvbXBsZXRlZCIsInRleHQiLCJ0ZXh0RGVjb3JhdGlvbiIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3RCQyxZQURzQixHQUNZRCxLQURaLENBQ3RCQyxZQURzQjtBQUFBLE1BQ1JDLFNBRFEsR0FDWUYsS0FEWixDQUNSRSxTQURRO0FBQUEsTUFDR0MsSUFESCxHQUNZSCxLQURaLENBQ0dHLElBREg7QUFBQSxNQUV4QkMsY0FGd0IsR0FFUEYsU0FBUyxHQUNSLGNBRFEsR0FFTixNQUpJO0FBQUEsTUFLeEJHLEtBTHdCLEdBS2hCO0FBQ05ELElBQUFBLGNBQWMsRUFBZEE7QUFETSxHQUxnQjtBQVM5QixzQkFFRTtBQUFJLElBQUEsS0FBSyxFQUFFQyxLQUFYO0FBQWtCLElBQUEsT0FBTyxFQUFFSjtBQUEzQixLQUNHRSxJQURILENBRkY7QUFPRCxDQWhCRDs7ZUFrQmVKLFkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgVG9kb0xpc3RJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xpY2tIYW5kbGVyLCBjb21wbGV0ZWQsIHRleHQgfSA9IHByb3BzLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9IGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZS10aHJvdWdoXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9uZVwiLFxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxuICAgICAge3RleHR9XG4gICAgPC9saT5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RJdGVtO1xuIl19