"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return setVisibilityFilter;
    }
});
var _constants = require("../constants");
function setVisibilityFilter() {
    var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eUZpbHRlcihhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG4iXSwibmFtZXMiOlsic2V0VmlzaWJpbGl0eUZpbHRlciIsImFjdGlvbiIsInR5cGUiLCJ1cGRhdGUiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJ2aXNpYmlsaXR5RmlsdGVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozt5QkFGYztBQUV2QixTQUFTQTtRQUFvQkMsU0FBQUEsaUVBQVMsQ0FBQztJQUNwRCxJQUFNLEFBQUVDLE9BQVNELE9BQVRDO0lBRVIsSUFBSUM7SUFFSixPQUFRRDtRQUNOLEtBQUtFLGdDQUFxQjtZQUN4QixJQUFNLEFBQUVDLG1CQUFxQkosT0FBckJJO1lBRVJGLFNBQVM7Z0JBQ1BFLGtCQUFBQTtZQUNGO1lBQ0E7SUFDSjtJQUVBLE9BQU9GO0FBQ1QifQ==