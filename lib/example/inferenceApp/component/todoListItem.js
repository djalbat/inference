"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoListItem;
    }
});
const _reaction = require("reaction");
const { Component } = _reaction.React;
class TodoListItem extends Component {
    render() {
        const { text } = this.props, className = "";
        return /*#__PURE__*/ _reaction.React.createElement("li", {
            className: className,
            onClick: ()=>{
                this.toggleClass("completed");
            }
        }, text);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW0iLCJDb21wb25lbnQiLCJSZWFjdCIsInJlbmRlciIsInRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsImxpIiwib25DbGljayIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzBCQUpDO0FBRXRCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLGVBQUs7QUFFWixNQUFNRixxQkFBcUJDO0lBQ3hDRSxTQUFVO1FBQ1IsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUNDLEtBQUssRUFDckJDLFlBQVk7UUFFbEIscUJBRUUsOEJBQUNDO1lBQUdELFdBQVdBO1lBQ1hFLFNBQVM7Z0JBRVAsSUFBSSxDQUFDQyxXQUFXLENBQUM7WUFFbkI7V0FFREw7SUFHUDtBQUNGIn0=