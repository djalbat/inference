"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _dispatcher = _interopRequireDefault(require("../dispatcher"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var inputDOMElement;
var AddTodo = function(props, context) {
    return(/*#__PURE__*/ _reaction.React.createElement("div", null, /*#__PURE__*/ _reaction.React.createElement("input", {
        ref: function(domElement) {
            inputDOMElement = domElement;
        }
    }), /*#__PURE__*/ _reaction.React.createElement("button", {
        onClick: function() {
            var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type: type,
                text: text
            };
            _dispatcher.default.dispatch(action);
            inputDOMElement.value = "";
        }
    }, "Add todo")));
};
var _default = AddTodo;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImRpc3BhdGNoZXIiLCJBRERfVE9ETyIsImlucHV0RE9NRWxlbWVudCIsIkFkZFRvZG8iLCJwcm9wcyIsImNvbnRleHQiLCJkaXYiLCJpbnB1dCIsInJlZiIsImRvbUVsZW1lbnQiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsInRleHQiLCJ2YWx1ZSIsImFjdGlvbiIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRVQsR0FBZSxDQUFmLFdBQWU7QUFFYixHQUFjLENBQWQsVUFBYzs7Ozs7O0FBRXZDLEdBQUcsQ0FBQyxlQUFlO0FBRW5CLEdBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFQLEtBQUssRUFBRSxPQUFPLEVBQUssQ0FBQztJQUNuQyxNQUFNLGVBVGMsU0FBVSxzQkFXekIsR0FBRyx1QkFYWSxTQUFVLHNCQVl2QixLQUFLO1FBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBUCxVQUFVLEVBQUssQ0FBQztZQUVwQixlQUFlLEdBQUcsVUFBVTtRQUU5QixDQUFDO3NCQWhCTSxTQUFVLHNCQWtCdkIsTUFBTTtRQUFDLE9BQU8sRUFBRSxRQUN6QixHQUQrQixDQUFDO1lBRWQsR0FBSyxDQUFDLElBQUksR0FoQkgsVUFBYyxXQWlCZixJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFDNUIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsSUFBSSxFQUFKLElBQUk7Z0JBQ0osSUFBSSxFQUFKLElBQUk7WUFDTixDQUFDO1lBdkJGLFdBQWUsU0F5QlQsUUFBUSxDQUFDLE1BQU07WUFFMUIsZUFBZSxDQUFDLEtBQUs7UUFFdkIsQ0FBQztRQUNSLFFBRUQ7QUFJUixDQUFDO2VBRWMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIl19