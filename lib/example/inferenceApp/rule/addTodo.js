"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addTodo;

var _constants = require("../constants");

function addTodo() {
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvZG8uanMiXSwibmFtZXMiOlsiYWRkVG9kbyIsImFjdGlvbiIsInR5cGUiLCJ1cGRhdGUiLCJBRERfVE9ETyIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRWUsU0FBU0EsT0FBVCxHQUE4QjtBQUFBLE1BQWJDLE1BQWEsdUVBQUosRUFBSTtBQUFBLE1BQ25DQyxJQURtQyxHQUMxQkQsTUFEMEIsQ0FDbkNDLElBRG1DO0FBRzNDLE1BQUlDLE1BQUo7O0FBRUEsVUFBUUQsSUFBUjtBQUNFLFNBQUtFLG1CQUFMO0FBQUEsVUFDVUMsSUFEVixHQUNtQkosTUFEbkIsQ0FDVUksSUFEVjtBQUdFRixNQUFBQSxNQUFNLEdBQUc7QUFDUEUsUUFBQUEsSUFBSSxFQUFKQTtBQURPLE9BQVQ7QUFHQTtBQVBKOztBQVVBLFNBQU9GLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kbyhhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgY29uc3QgeyB0ZXh0IH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdGV4dFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiJdfQ==