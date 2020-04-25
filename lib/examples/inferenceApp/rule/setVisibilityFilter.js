"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var setVisibilityFilter = function setVisibilityFilter() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = action.type;
  var update;

  switch (type) {
    case _constants.SET_VISIBILITY_FILTER:
      var visibilityFilter = action.visibilityFilter;
      update = {
        visibilityFilter: visibilityFilter
      };
      break;
  }

  return update;
};

var _default = setVisibilityFilter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldFZpc2liaWxpdHlGaWx0ZXIuanMiXSwibmFtZXMiOlsic2V0VmlzaWJpbGl0eUZpbHRlciIsImFjdGlvbiIsInR5cGUiLCJ1cGRhdGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJ2aXNpYmlsaXR5RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLE1BQ25DQyxJQURtQyxHQUMxQkQsTUFEMEIsQ0FDbkNDLElBRG1DO0FBRzNDLE1BQUlDLE1BQUo7O0FBRUEsVUFBUUQsSUFBUjtBQUNFLFNBQUtFLGdDQUFMO0FBQUEsVUFDVUMsZ0JBRFYsR0FDK0JKLE1BRC9CLENBQ1VJLGdCQURWO0FBR0VGLE1BQUFBLE1BQU0sR0FBRztBQUNQRSxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBRE8sT0FBVDtBQUdBO0FBUEo7O0FBVUEsU0FBT0YsTUFBUDtBQUNELENBaEJEOztlQWtCZUgsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBzZXRWaXNpYmlsaXR5RmlsdGVyID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFZpc2liaWxpdHlGaWx0ZXI7XG4iXX0=