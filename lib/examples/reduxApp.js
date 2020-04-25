"use strict";

var _reaction = require("reaction");

var _redux = require("./reduxApp/redux");

var _reducer = _interopRequireDefault(require("./reduxApp/reducer"));

var _todoApp = _interopRequireDefault(require("./reduxApp/component/todoApp"));

var _provider = _interopRequireDefault(require("./reduxApp/component/provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reduxApp = function reduxApp() {
  var store = (0, _redux.createStore)(_reducer["default"]),
      rootDOMElement = document.getElementById("root");

  _reaction.ReactDOM.render( /*#__PURE__*/_reaction.React.createElement(_provider["default"], {
    store: store
  }, /*#__PURE__*/_reaction.React.createElement(_todoApp["default"], null)), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbInJlZHV4QXBwIiwic3RvcmUiLCJyZWR1Y2VyIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsS0FBSyxHQUFHLHdCQUFZQyxtQkFBWixDQUFkO0FBQUEsTUFDTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FEdkI7O0FBR0FDLHFCQUFTQyxNQUFULGVBRUksOEJBQUMsb0JBQUQ7QUFBVSxJQUFBLEtBQUssRUFBRU47QUFBakIsa0JBQ0UsOEJBQUMsbUJBQUQsT0FERixDQUZKLEVBT0VFLGNBUEY7QUFVRCxDQWREOztBQWdCQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxRQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1eFwiO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1Y2VyXCI7XG5pbXBvcnQgVG9kb0FwcCBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlclwiO1xuXG5jb25zdCByZWR1eEFwcCA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eEFwcDtcbiJdfQ==