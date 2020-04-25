"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.SHOW_ALL;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;

  switch (type) {
    case _constants.SET_VISIBILITY_FILTER:
      var _visibilityFilter = action.visibilityFilter;
      state = _visibilityFilter;
      break;
  }

  return state;
};

var _default = visibilityFilter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2liaWxpdHlGaWx0ZXIuanMiXSwibmFtZXMiOlsidmlzaWJpbGl0eUZpbHRlciIsInN0YXRlIiwiU0hPV19BTEwiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBbUM7QUFBQSxNQUFsQ0MsS0FBa0MsdUVBQTFCQyxtQkFBMEI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLE1BQ2xEQyxJQURrRCxHQUN6Q0QsTUFEeUMsQ0FDbERDLElBRGtEOztBQUcxRCxVQUFRQSxJQUFSO0FBQ0UsU0FBS0MsZ0NBQUw7QUFBQSxVQUNVTCxpQkFEVixHQUMrQkcsTUFEL0IsQ0FDVUgsZ0JBRFY7QUFHRUMsTUFBQUEsS0FBSyxHQUFHRCxpQkFBUjtBQUNBO0FBTEo7O0FBUUEsU0FBT0MsS0FBUDtBQUNELENBWkQ7O2VBY2VELGdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoc3RhdGUgPSBTSE9XX0FMTCwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHN0YXRlID0gdmlzaWJpbGl0eUZpbHRlcjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmlzaWJpbGl0eUZpbHRlcjtcbiJdfQ==