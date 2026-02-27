"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Provider;
    }
});
const _reaction = require("reaction");
const { Component } = _reaction.React;
class Provider extends Component {
    getChildContext(context) {
        const { store } = this.props, childContext = {
            store
        };
        return childContext;
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsIkNvbXBvbmVudCIsIlJlYWN0IiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29udGV4dCIsInN0b3JlIiwicHJvcHMiLCJjaGlsZENvbnRleHQiLCJyZW5kZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzswQkFKQztBQUV0QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxlQUFLO0FBRVosTUFBTUYsaUJBQWlCQztJQUNwQ0UsZ0JBQWdCQyxPQUFPLEVBQUU7UUFDdkIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUNDLEtBQUssRUFDdEJDLGVBQWU7WUFDYkY7UUFDRjtRQUVOLE9BQU9FO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDSCxLQUFLO1FBRS9CLE9BQU9HO0lBQ1Q7QUFDRiJ9