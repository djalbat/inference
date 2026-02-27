"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _reaction = require("reaction");
const _constants = require("../constants");
let id = 0, inputDOMElement;
const AddTodo = (props, context)=>{
    const { store } = context;
    return /*#__PURE__*/ _reaction.React.createElement("div", null, /*#__PURE__*/ _reaction.React.createElement("input", {
        ref: (domElement)=>{
            inputDOMElement = domElement;
        }
    }), /*#__PURE__*/ _reaction.React.createElement("button", {
        onClick: ()=>{
            const type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type,
                text,
                id
            };
            id++;
            store.dispatch(action);
            inputDOMElement.value = "";
        }
    }, "Add todo"));
};
const _default = AddTodo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG87XG4iXSwibmFtZXMiOlsiaWQiLCJpbnB1dERPTUVsZW1lbnQiLCJBZGRUb2RvIiwicHJvcHMiLCJjb250ZXh0Iiwic3RvcmUiLCJkaXYiLCJpbnB1dCIsInJlZiIsImRvbUVsZW1lbnQiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsIkFERF9UT0RPIiwidGV4dCIsInZhbHVlIiwiYWN0aW9uIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThDQTs7O2VBQUE7OzswQkE1Q3NCOzJCQUVHO0FBRXpCLElBQUlBLEtBQUssR0FDTEM7QUFFSixNQUFNQyxVQUFVLENBQUNDLE9BQU9DO0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdEO0lBRWxCLHFCQUVFLDhCQUFDRSwyQkFDQyw4QkFBQ0M7UUFBTUMsS0FBSyxDQUFDQztZQUVKUixrQkFBa0JRO1FBRXBCO3NCQUVQLDhCQUFDQztRQUFPQyxTQUFTO1lBRVAsTUFBTUMsT0FBT0MsbUJBQVEsRUFDZkMsT0FBT2IsZ0JBQWdCYyxLQUFLLEVBQzVCQyxTQUFTO2dCQUNQSjtnQkFDQUU7Z0JBQ0FkO1lBQ0Y7WUFFTkE7WUFFQUssTUFBTVksUUFBUSxDQUFDRDtZQUVmZixnQkFBZ0JjLEtBQUssR0FBRztRQUUxQjtPQUNQO0FBTVA7TUFFQSxXQUFlYiJ9