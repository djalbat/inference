"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return visibilityFilter;
    }
});
var _constants = require("../constants");
function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.SHOW_ALL, action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var type = action.type;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            var visibilityFilter = action.visibilityFilter;
            state = visibilityFilter;
            break;
    }
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXSwibmFtZXMiOlsidmlzaWJpbGl0eUZpbHRlciIsInN0YXRlIiwiU0hPV19BTEwiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozt5QkFGd0I7QUFFakMsU0FBU0E7UUFBaUJDLFFBQUFBLGlFQUFRQyxtQkFBUSxFQUFFQyxTQUFBQSxpRUFBUyxDQUFDO0lBQ25FLElBQU0sQUFBRUMsT0FBU0QsT0FBVEM7SUFFUixPQUFRQTtRQUNOLEtBQUtDLGdDQUFxQjtZQUN4QixJQUFNLEFBQUVMLG1CQUFxQkcsT0FBckJIO1lBRVJDLFFBQVFEO1lBQ1I7SUFDSjtJQUVBLE9BQU9DO0FBQ1QifQ==