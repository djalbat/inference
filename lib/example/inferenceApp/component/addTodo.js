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
    return _reaction.React.createElement("div", null, _reaction.React.createElement("input", {
        ref: function(domElement) {
            inputDOMElement = domElement;
        }
    }), _reaction.React.createElement("button", {
        onClick: function() {
            var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type: type,
                text: text
            };
            _dispatcher.default.dispatch(action);
            inputDOMElement.value = "";
        }
    }, "Add todo"));
};
var _default = AddTodo;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFNBQUE7SUFFQSxXQUFBO0lBRUEsVUFBQTs7Ozs7O0lBRUEsZUFBQTtJQUVBLE9BQUEsWUFBQSxLQUFBLEVBQUEsT0FBQTtXQVJBLFNBQUEsc0JBV0EsR0FBQSxTQVhBLFNBQUEsc0JBWUEsS0FBQTtBQUFBLFdBQUEsV0FBQSxVQUFBO0FBRUEsMkJBQUEsR0FBQSxVQUFBOztRQWRBLFNBQUEsc0JBa0JBLE1BQUE7QUFBQSxlQUFBO2dCQUVBLElBQUEsR0FoQkEsVUFBQSxXQWlCQSxJQUFBLEdBQUEsZUFBQSxDQUFBLEtBQUEsRUFDQSxNQUFBO0FBQ0Esb0JBQUEsRUFBQSxJQUFBO0FBQ0Esb0JBQUEsRUFBQSxJQUFBOztBQXRCQSx1QkFBQSxTQXlCQSxRQUFBLENBQUEsTUFBQTtBQUVBLDJCQUFBLENBQUEsS0FBQTs7UUFHQSxRQUVBOztlQU1BLE9BQUEifQ==