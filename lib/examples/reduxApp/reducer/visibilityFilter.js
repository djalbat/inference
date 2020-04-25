"use strict";

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

module.exports = visibilityFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2liaWxpdHlGaWx0ZXIuanMiXSwibmFtZXMiOlsidmlzaWJpbGl0eUZpbHRlciIsInN0YXRlIiwiU0hPV19BTEwiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFtQztBQUFBLE1BQWxDQyxLQUFrQyx1RUFBMUJDLG1CQUEwQjtBQUFBLE1BQWhCQyxNQUFnQix1RUFBUCxFQUFPO0FBQUEsTUFDbERDLElBRGtELEdBQ3pDRCxNQUR5QyxDQUNsREMsSUFEa0Q7O0FBRzFELFVBQVFBLElBQVI7QUFDRSxTQUFLQyxnQ0FBTDtBQUFBLFVBQ1VMLGlCQURWLEdBQytCRyxNQUQvQixDQUNVSCxnQkFEVjtBQUdFQyxNQUFBQSxLQUFLLEdBQUdELGlCQUFSO0FBQ0E7QUFMSjs7QUFRQSxTQUFPQyxLQUFQO0FBQ0QsQ0FaRDs7QUFjQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxnQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9IChzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2liaWxpdHlGaWx0ZXI7XG4iXX0=