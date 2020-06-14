"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setVisibilityFilter;

var _constants = require("../constants");

function setVisibilityFilter() {
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldFZpc2liaWxpdHlGaWx0ZXIuanMiXSwibmFtZXMiOlsic2V0VmlzaWJpbGl0eUZpbHRlciIsImFjdGlvbiIsInR5cGUiLCJ1cGRhdGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJ2aXNpYmlsaXR5RmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVlLFNBQVNBLG1CQUFULEdBQTBDO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQUEsTUFDL0NDLElBRCtDLEdBQ3RDRCxNQURzQyxDQUMvQ0MsSUFEK0M7QUFHdkQsTUFBSUMsTUFBSjs7QUFFQSxVQUFRRCxJQUFSO0FBQ0UsU0FBS0UsZ0NBQUw7QUFBQSxVQUNVQyxnQkFEVixHQUMrQkosTUFEL0IsQ0FDVUksZ0JBRFY7QUFHRUYsTUFBQUEsTUFBTSxHQUFHO0FBQ1BFLFFBQUFBLGdCQUFnQixFQUFoQkE7QUFETyxPQUFUO0FBR0E7QUFQSjs7QUFVQSxTQUFPRixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5RmlsdGVyKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiJdfQ==