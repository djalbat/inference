"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var addTodo = function addTodo() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = action.type;
  var update;

  switch (type) {
    case _constants.ADD_TODO:
      var text = action.text;
      update = {
        text: text
      };
      break;
  }

  return update;
};

var _default = addTodo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvZG8uanMiXSwibmFtZXMiOlsiYWRkVG9kbyIsImFjdGlvbiIsInR5cGUiLCJ1cGRhdGUiLCJBRERfVE9ETyIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLE1BQ3ZCQyxJQUR1QixHQUNkRCxNQURjLENBQ3ZCQyxJQUR1QjtBQUcvQixNQUFJQyxNQUFKOztBQUVBLFVBQVFELElBQVI7QUFDRSxTQUFLRSxtQkFBTDtBQUFBLFVBQ1VDLElBRFYsR0FDbUJKLE1BRG5CLENBQ1VJLElBRFY7QUFHRUYsTUFBQUEsTUFBTSxHQUFHO0FBQ1BFLFFBQUFBLElBQUksRUFBSkE7QUFETyxPQUFUO0FBR0E7QUFQSjs7QUFVQSxTQUFPRixNQUFQO0FBQ0QsQ0FoQkQ7O2VBa0JlSCxPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBhZGRUb2RvID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkVG9kbztcbiJdfQ==