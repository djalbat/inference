"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _reaction = require("reaction");
var _filterLink = /*#__PURE__*/ _interopRequireDefault(require("./filterLink"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Footer = function(props, context) {
    return /*#__PURE__*/ _reaction.React.createElement("p", null, "Show: ", /*#__PURE__*/ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
    }, "All"), " - ", /*#__PURE__*/ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
    }, "Active"), " - ", /*#__PURE__*/ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
    }, "Completed"));
};
var _default = Footer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImNvbnRleHQiLCJwIiwiRmlsdGVyTGluayIsImZpbHRlciIsIlNIT1dfQUxMIiwiU0hPV19BQ1RJVkUiLCJTSE9XX0NPTVBMRVRFRCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXFCYixTQUFzQjs7O2VBQXRCLFFBQXNCOzs7d0JBbkJBLFVBQVU7K0RBRVQsY0FBYzt5QkFFaUIsY0FBYzs7Ozs7O0FBRXBFLElBQU1BLE1BQU0sR0FBRyxTQUFDQyxLQUFLLEVBQUVDLE9BQU87eUJBRTVCLDhCQUFDQyxHQUFDLFFBQ0MsUUFBUSxnQkFDVCw4QkFBQ0MsV0FBVSxRQUFBO1FBQUNDLE1BQU0sRUFBRUMsVUFBUSxTQUFBO09BQUUsS0FBRyxDQUFhLEVBQzdDLEtBQUssZ0JBQ04sOEJBQUNGLFdBQVUsUUFBQTtRQUFDQyxNQUFNLEVBQUVFLFVBQVcsWUFBQTtPQUFFLFFBQU0sQ0FBYSxFQUNuRCxLQUFLLGdCQUNOLDhCQUFDSCxXQUFVLFFBQUE7UUFBQ0MsTUFBTSxFQUFFRyxVQUFjLGVBQUE7T0FBRSxXQUFTLENBQWEsQ0FDeEQ7Q0FBQSxBQUVMO0lBRUQsUUFBc0IsR0FBUFIsTUFBTSJ9