"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _filterLink = _interopRequireDefault(require("./filterLink"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer() {
  return /*#__PURE__*/_reaction.React.createElement("p", null, "Show: ", /*#__PURE__*/_reaction.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ALL
  }, "All"), " - ", /*#__PURE__*/_reaction.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ACTIVE
  }, "Active"), " - ", /*#__PURE__*/_reaction.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_COMPLETED
  }, "Completed"));
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHNCQUViLHlDQUNHLFFBREgsZUFFRSw4QkFBQyxzQkFBRDtBQUFZLElBQUEsTUFBTSxFQUFFQztBQUFwQixXQUZGLEVBR0csS0FISCxlQUlFLDhCQUFDLHNCQUFEO0FBQVksSUFBQSxNQUFNLEVBQUVDO0FBQXBCLGNBSkYsRUFLRyxLQUxILGVBTUUsOEJBQUMsc0JBQUQ7QUFBWSxJQUFBLE1BQU0sRUFBRUM7QUFBcEIsaUJBTkYsQ0FGYTtBQUFBLENBQWY7O2VBYWVILE0iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSBcIi4vZmlsdGVyTGlua1wiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PlxuXG4gIDxwPlxuICAgIHtcIlNob3c6IFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICA8L3A+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19