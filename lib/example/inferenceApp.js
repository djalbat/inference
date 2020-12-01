"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _todoApp = _interopRequireDefault(require("./inferenceApp/component/todoApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inferenceApp = function inferenceApp() {
  var rootDOMElement = document.getElementById("root");

  _reaction.ReactDOM.render(_reaction.React.createElement(_todoApp["default"], null), rootDOMElement);
};

var _default = inferenceApp;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmVyZW5jZUFwcC5qcyJdLCJuYW1lcyI6WyJpbmZlcmVuY2VBcHAiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsTUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBdkI7O0FBRUFDLHFCQUFTQyxNQUFULENBRUksOEJBQUMsbUJBQUQsT0FGSixFQUtFSixjQUxGO0FBUUQsQ0FYRDs7ZUFhZUQsWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwXCI7XG5cbmNvbnN0IGluZmVyZW5jZUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8VG9kb0FwcCAvPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZmVyZW5jZUFwcDtcbiJdfQ==