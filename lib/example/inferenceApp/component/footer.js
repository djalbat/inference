"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _filterLink = _interopRequireDefault(require("./filterLink"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer(props, context) {
  return _reaction.React.createElement("p", null, "Show: ", _reaction.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ALL
  }, "All"), " - ", _reaction.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ACTIVE
  }, "Active"), " - ", _reaction.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_COMPLETED
  }, "Completed"));
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImNvbnRleHQiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVI7QUFBQSxTQUViLHlDQUNHLFFBREgsRUFFRSw4QkFBQyxzQkFBRDtBQUFZLElBQUEsTUFBTSxFQUFFQztBQUFwQixXQUZGLEVBR0csS0FISCxFQUlFLDhCQUFDLHNCQUFEO0FBQVksSUFBQSxNQUFNLEVBQUVDO0FBQXBCLGNBSkYsRUFLRyxLQUxILEVBTUUsOEJBQUMsc0JBQUQ7QUFBWSxJQUFBLE1BQU0sRUFBRUM7QUFBcEIsaUJBTkYsQ0FGYTtBQUFBLENBQWY7O2VBYWVMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSBcIi4vZmlsdGVyTGlua1wiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHA+XG4gICAge1wiU2hvdzogXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gIDwvcD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0=