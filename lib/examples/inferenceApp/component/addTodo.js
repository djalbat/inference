"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inputDOMElement;

var AddTodo = function AddTodo() {
  return /*#__PURE__*/_reaction.React.createElement("div", null, /*#__PURE__*/_reaction.React.createElement("input", {
    ref: function ref(domElement) {
      inputDOMElement = domElement;
    }
  }), /*#__PURE__*/_reaction.React.createElement("button", {
    onClick: function onClick() {
      var type = _constants.ADD_TODO,
          text = inputDOMElement.value,
          ///
      action = {
        type: type,
        text: text
      };

      _dispatcher["default"].dispatch(action);

      inputDOMElement.value = "";
    }
  }, "Add todo"));
};

var _default = AddTodo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvZG8uanMiXSwibmFtZXMiOlsiaW5wdXRET01FbGVtZW50IiwiQWRkVG9kbyIsImRvbUVsZW1lbnQiLCJ0eXBlIiwiQUREX1RPRE8iLCJ0ZXh0IiwidmFsdWUiLCJhY3Rpb24iLCJkaXNwYXRjaGVyIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFFQSxJQUFJQSxlQUFKOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsc0JBRUksd0RBQ0U7QUFBTyxJQUFBLEdBQUcsRUFBRSxhQUFDQyxVQUFELEVBQWdCO0FBRWZGLE1BQUFBLGVBQWUsR0FBR0UsVUFBbEI7QUFFRDtBQUpaLElBREYsZUFPRTtBQUFRLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBRUwsVUFBTUMsSUFBSSxHQUFHQyxtQkFBYjtBQUFBLFVBQ01DLElBQUksR0FBR0wsZUFBZSxDQUFDTSxLQUQ3QjtBQUFBLFVBQ3FDO0FBQy9CQyxNQUFBQSxNQUFNLEdBQUc7QUFDUEosUUFBQUEsSUFBSSxFQUFKQSxJQURPO0FBRVBFLFFBQUFBLElBQUksRUFBSkE7QUFGTyxPQUZmOztBQU9BRyw2QkFBV0MsUUFBWCxDQUFvQkYsTUFBcEI7O0FBRUFQLE1BQUFBLGVBQWUsQ0FBQ00sS0FBaEIsR0FBd0IsRUFBeEI7QUFFRDtBQWJqQixnQkFQRixDQUZKO0FBNkJELENBOUJEOztlQWdDZUwsTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIl19