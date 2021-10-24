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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiJdLCJuYW1lcyI6WyJpbnB1dERPTUVsZW1lbnQiLCJBZGRUb2RvIiwiY29udGV4dCIsInByb3BzIiwiZGl2IiwiaW5wdXQiLCJyZWYiLCJkb21FbGVtZW50IiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJ0ZXh0IiwidmFsdWUiLCJhY3Rpb24iLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFVLENBQVYsU0FBVTtBQUVULEdBQWUsQ0FBZixXQUFlO0FBRWIsR0FBYyxDQUFkLFVBQWM7Ozs7OztBQUV2QyxHQUFHLENBQUNBLGVBQWU7QUFFbkIsR0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxPQUFPLEVBQUssQ0FBQztJQUNuQyxNQUFNLGVBVGMsU0FBVSxxQkFXekJFLENBQUcsMEJBWFksU0FBVSxxQkFZdkJDLENBQUs7UUFBQ0MsR0FBRyxFQUFFLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7WUFFcEJQLGVBQWUsR0FBR08sVUFBVTtRQUU5QixDQUFDO3NCQWhCTSxTQUFVLHFCQWtCdkJDLENBQU07UUFBQ0MsT0FBTyxFQUFFLFFBQ3pCLEdBRCtCLENBQUM7WUFFZCxHQUFLLENBQUNDLElBQUksR0FoQkgsVUFBYyxXQWlCZkMsSUFBSSxHQUFHWCxlQUFlLENBQUNZLEtBQUssRUFDNUJDLE1BQU0sR0FBRyxDQUFDO2dCQUNSSCxJQUFJLEVBQUpBLElBQUk7Z0JBQ0pDLElBQUksRUFBSkEsSUFBSTtZQUNOLENBQUM7WUF2QkYsV0FBZSxTQXlCVEcsUUFBUSxDQUFDRCxNQUFNO1lBRTFCYixlQUFlLENBQUNZLEtBQUssR0FBRyxDQUFFO1FBRTVCLENBQUM7T0FDUixDQUVEO0FBSVIsQ0FBQztlQUVjWCxPQUFPIn0=