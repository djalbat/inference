"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FilterLink;
    }
});
const _reaction = require("reaction");
const _constants = require("../constants");
const { Component } = _reaction.React;
class FilterLink extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context, state = store.getState(), { visibilityFilter } = state, { children, filter } = this.props, active = filter === visibilityFilter;
        if (active) {
            return /*#__PURE__*/ _reaction.React.createElement("span", null, children);
        }
        return /*#__PURE__*/ _reaction.React.createElement("a", {
            href: "#",
            className: "filter",
            onClick: (event)=>{
                event.preventDefault();
                const type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                    type,
                    visibilityFilter
                };
                store.dispatch(action);
            }
        }, children);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbHRlckxpbmsiLCJDb21wb25lbnQiLCJSZWFjdCIsImNvbXBvbmVudERpZE1vdW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwic3RhdGUiLCJnZXRTdGF0ZSIsInZpc2liaWxpdHlGaWx0ZXIiLCJjaGlsZHJlbiIsImZpbHRlciIsInByb3BzIiwiYWN0aXZlIiwic3BhbiIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwiYWN0aW9uIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7MEJBTkM7MkJBRWdCO0FBRXRDLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLGVBQUs7QUFFWixNQUFNRixtQkFBbUJDO0lBQ3RDRSxvQkFBb0I7UUFDbEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUNDLE9BQU87UUFFOUIsSUFBSSxDQUFDQyxXQUFXLEdBQUdGLE1BQU1HLFNBQVMsQ0FBQyxJQUFNLElBQUksQ0FBQ0MsV0FBVztJQUMzRDtJQUVBQyx1QkFBdUI7UUFDckIsSUFBSSxDQUFDSCxXQUFXO0lBQ2xCO0lBRUFJLFNBQVM7UUFDUCxNQUFNLEVBQUVOLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUN4Qk0sUUFBUVAsTUFBTVEsUUFBUSxJQUN0QixFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHRixPQUN2QixFQUFFRyxRQUFRLEVBQUVDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSyxFQUNqQ0MsU0FBVUYsV0FBV0Y7UUFFM0IsSUFBSUksUUFBUTtZQUNWLHFCQUVFLDhCQUFDQyxjQUFNSjtRQUdYO1FBRUEscUJBRUUsOEJBQUNLO1lBQUVDLE1BQUs7WUFDTEMsV0FBVTtZQUNWQyxTQUFTLENBQUNDO2dCQUVSQSxNQUFNQyxjQUFjO2dCQUVwQixNQUFNQyxPQUFPQyxnQ0FBcUIsRUFDNUJiLG1CQUFtQkUsUUFDbkJZLFNBQVM7b0JBQ1BGO29CQUNBWjtnQkFDRjtnQkFFTlQsTUFBTXdCLFFBQVEsQ0FBQ0Q7WUFFakI7V0FFQWI7SUFHUDtBQUNGIn0=