"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setVisibilityFilter;
var _constants = require("../constants");
function setVisibilityFilter(param) {
    var action = param === void 0 ? {
    } : param;
    var type = action.type;
    var update;
    switch(type){
        case _constants.SET_VISIBILITY_FILTER:
            var visibilityFilter = action.visibilityFilter;
            update = {
                visibilityFilter: visibilityFilter
            };
            break;
    }
    return update;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eUZpbHRlcihhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztrQkFJWSxtQkFBbUI7QUFGTCxHQUFjLENBQWQsVUFBYztTQUU1QixtQkFBbUIsQ0FBQyxLQUFXLEVBQUUsQ0FBQztRQUFkLE1BQU0sR0FBTixLQUFXO1FBQVgsS0FBVztJQUNyRCxHQUFLLENBQUcsSUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJO0lBRVosR0FBRyxDQUFDLE1BQU07V0FFRixJQUFJO2FBUHdCLFVBQWM7WUFTOUMsR0FBSyxDQUFHLGdCQUFnQixHQUFLLE1BQU0sQ0FBM0IsZ0JBQWdCO1lBRXhCLE1BQU07Z0JBQ0osZ0JBQWdCLEVBQWhCLGdCQUFnQjs7OztXQUtmLE1BQU07QUFDZixDQUFDIn0=