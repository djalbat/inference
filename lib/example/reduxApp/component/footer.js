"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _filterLink = _interopRequireDefault(require("./filterLink"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Footer = function(props, context) {
    /*#__PURE__*/ return _reaction.React.createElement("p", null, "Show: ", /*#__PURE__*/ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
    }, "All"), " - ", /*#__PURE__*/ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
    }, "Active"), " - ", /*#__PURE__*/ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
    }, "Completed"));
};
var _default = Footer;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBGaWx0ZXJMaW5rIGZyb20gXCIuL2ZpbHRlckxpbmtcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxwPlxuICAgIHtcIlNob3c6IFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICA8L3A+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sIm5hbWVzIjpbIkZvb3RlciIsImNvbnRleHQiLCJwcm9wcyIsInAiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFVCxHQUFjLENBQWQsV0FBYztBQUVpQixHQUFjLENBQWQsVUFBYzs7Ozs7O0FBRXBFLEdBQUssQ0FBQ0EsTUFBTSxHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsT0FBTztrQkFFNUIsTUFDQSxDQVRvQixTQUFVLHFCQVE3QkUsQ0FBQyxVQUNDLENBQVEsdUJBVFMsU0FBVSxxQkFFVCxXQUFjO1FBUXJCQyxNQUFNLEVBTmdDLFVBQWM7T0FNbEMsQ0FBRyxPQUNoQyxDQUFLLG9CQVhZLFNBQVUscUJBRVQsV0FBYztRQVVyQkEsTUFBTSxFQVJnQyxVQUFjO09BUS9CLENBQU0sVUFDdEMsQ0FBSyxvQkFiWSxTQUFVLHFCQUVULFdBQWM7UUFZckJBLE1BQU0sRUFWZ0MsVUFBYztPQVU1QixDQUFTOztlQUtsQ0osTUFBTSJ9